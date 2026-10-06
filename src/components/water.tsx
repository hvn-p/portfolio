'use client'

// Night water seen from above, drawn on a fine grid of short strokes: above the hero's
// statement, and in a frame beside the contact call. Ported from mockup/site.js with its
// own formulas. The moon catches on the water's slopes as broad reflections that drift
// and change shape, lighting the strokes they cover. The pointer's gesture stirs the
// strokes along its path: they catch more light, stretch the way it went and are pushed
// ahead of it, each keeping its own light, then settle. Faster gestures stir wider and
// push further. A touch screen gets the water without the stirring; reduced motion,
// no water at all.

import { useEffect, useRef, useState } from 'react'

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))
const smooth = (t: number) => t * t * (3 - 2 * t)
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

const STEP_X = 9
const STEP_Y = 7 // CSS pixels between strokes
// The surface: slow waves crossing in different directions (length in px, heading, speed in px/s).
const WAVES = [
  [360, 0.3, 34],
  [270, 1.9, 30],
  [200, 3.6, 26],
  [150, 5.0, 22],
  [110, 2.6, 18],
].map(([len, dir, speed], i) => {
  const k = 6.283 / len
  return { k, dx: Math.cos(dir), dy: Math.sin(dir), w: k * speed, ph: i * 1.7 }
})
// The slope that sends moonlight up to the eye, and the tolerance around it.
const SX = 0.9
const SY = -0.6
const SPREAD = 0.6

type Stroke = {
  x: number
  y: number
  fade: number
  f: number
  ph: number
  at: number[]
  dx: number
  dy: number
  ox: number
  oy: number
  e: number
}
type Surface = {
  // The canvas size, and how strong the water is along it, top to bottom.
  size: () => { w: number; h: number; fade: (y: number) => number }
  // How far down the water shows, fading out over the 200 px above it.
  edge?: () => number
  // Whether the pointer leaves the water alone for now.
  still?: () => boolean
}

// Draws the water on a canvas, redrawn when `watch` resizes. Returns its cleanup.
function water(
  canvas: HTMLCanvasElement,
  watch: HTMLElement,
  { size, edge = () => Infinity, still = () => false }: Surface,
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return () => {}
  let strokes: Stroke[] = []
  let w = 0
  let h = 0
  let seed = 0
  // Seeded, so the strokes twinkle the same way on every visit.
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0
    return seed / 4294967296
  }
  // Strokes the pointer has stirred and that have not settled yet.
  const stirred = new Set<Stroke>()
  const fit = () => {
    const s = size()
    w = s.w
    h = s.h
    const dpr = Math.min(devicePixelRatio, 2)
    Object.assign(canvas.style, { width: `${w}px`, height: `${h}px` })
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    strokes = []
    stirred.clear()
    seed = 7
    for (let y = 4; y < h; y += STEP_Y) {
      const fade = s.fade(y)
      for (let x = STEP_X / 2; x < w; x += STEP_X) {
        const f = 2 + 3 * rand()
        const ph = rand() * 6.283
        if (fade <= 0.02) continue
        // Each wave's phase at this stroke, as a cosine and a sine: a frame then moves it on
        // with two products, without a cosine per stroke.
        const at = WAVES.flatMap((v) => {
          const a = v.k * (v.dx * x + v.dy * y) + v.ph
          return [Math.cos(a), Math.sin(a)]
        })
        strokes.push({ x, y, fade, f, ph, at, dx: 0, dy: 0, ox: 0, oy: 0, e: 0 })
      }
    }
  }
  fit()
  const resized = new ResizeObserver(fit)
  resized.observe(watch)
  addEventListener('resize', fit)

  // Drawn only while on screen, and when the page last scrolled.
  let shown = true
  let scrolled = 0
  const born = performance.now()
  let raf = 0
  let drawn = 0
  let last = born
  const loop = (now: number) => {
    raf = 0
    const limit = edge()
    if (limit < 0 || !shown || document.hidden) {
      ctx.clearRect(0, 0, w, h)
      return
    }
    raf = requestAnimationFrame(loop)
    // A calm surface needs no more than 30 frames a second, unless the page is scrolling.
    if (!stirred.size && now - scrolled > 100 && now - drawn < 32) return
    const dt = Math.min((now - last) / 16.7, 3)
    drawn = last = now
    const t = now / 1000
    const intro = smooth(clamp((now - born) / 1800))
    const relax = 0.93 ** dt
    const calm = 0.95 ** dt
    const back = 0.92 ** dt
    const turn = WAVES.flatMap((v) => [Math.cos(v.w * t), Math.sin(v.w * t)])
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = ctx.strokeStyle = '#EDEBE6'
    for (const s of strokes) {
      const pull = Math.hypot(s.dx, s.dy)
      if (stirred.has(s)) {
        s.dx *= relax
        s.dy *= relax
        s.e *= calm
        s.ox *= back
        s.oy *= back
        if (pull < 0.3 && s.e < 0.01 && Math.abs(s.ox) + Math.abs(s.oy) < 0.3) {
          s.dx = s.dy = s.ox = s.oy = s.e = 0
          stirred.delete(s)
        }
      }
      if (s.y > limit) continue
      let sx = 0
      let sy = 0
      for (let i = 0; i < WAVES.length; i++) {
        const g = s.at[2 * i] * turn[2 * i] + s.at[2 * i + 1] * turn[2 * i + 1]
        sx += g * WAVES[i].dx
        sy += g * WAVES[i].dy
      }
      // A stirred stroke catches the light more easily and shines brighter than the calm
      // surface, until it settles. Out of reach of the light, it stays dark: skip it early.
      const spread = SPREAD * (1 + s.e)
      const off = ((sx - SX) ** 2 + (sy - SY) ** 2) / (spread * spread)
      if (off > 3.51 + Math.log1p(s.e)) continue
      const lit = Math.exp(-off) * (1 + s.e)
      const fade = limit === Infinity ? s.fade : s.fade * smooth(clamp((limit - s.y) / 200))
      const b = fade * intro * lit * (0.75 + 0.25 * Math.sin(s.f * t + s.ph))
      if (b < 0.03) continue
      // Brighter strokes are also longer, in steps of 2 px.
      const len = 2 + 2 * Math.round(Math.min(b, 1.5) * 2)
      // A stretched stroke spreads its light over more length.
      const gain = 0.45 + 0.55 * s.e
      ctx.globalAlpha = Math.min(b * gain, gain) / (1 + pull / 80)
      const x = s.x + s.ox
      const y = s.y + s.oy
      if (pull < 1) {
        ctx.fillRect(x - len / 2, y, len, 1)
        continue
      }
      ctx.beginPath()
      ctx.moveTo(x - len / 2, y + 0.5)
      ctx.lineTo(x + len / 2 + s.dx, y + 0.5 + s.dy)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
  }
  const wake = () => {
    if (!raf) raf = requestAnimationFrame(loop)
  }
  wake()
  const onScroll = () => {
    scrolled = performance.now()
    wake()
  }
  addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('visibilitychange', wake)
  const seen = new IntersectionObserver(([entry]) => {
    shown = entry.isIntersecting
    wake()
  })
  seen.observe(canvas)

  // The gesture stirs the strokes along its path, wider and brighter as it goes faster,
  // and pushes them ahead; the closest ones are also pulled along it.
  let prev: [number, number] | null = null
  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return
    const r = canvas.getBoundingClientRect()
    if (still() || e.clientX < r.left || e.clientX >= r.right || e.clientY < r.top || e.clientY >= r.bottom) {
      prev = null
      return
    }
    const p: [number, number] = [e.clientX - r.left, e.clientY - r.top]
    if (prev) {
      const ux = p[0] - prev[0]
      const uy = p[1] - prev[1]
      const len = Math.hypot(ux, uy)
      if (len > 0.5) {
        const pace = clamp(len / 40)
        const reach = 40 + 110 * pace
        const grip = 30 + 30 * pace
        for (const s of strokes) {
          const at = clamp(((s.x - prev[0]) * ux + (s.y - prev[1]) * uy) / (len * len))
          const d = Math.hypot(s.x - prev[0] - ux * at, s.y - prev[1] - uy * at)
          if (d > reach) continue
          const near = (1 - d / reach) ** 2
          // Light answers even an unhurried gesture; reach and push need speed.
          s.e = Math.max(s.e, Math.sqrt(pace) * near)
          const push = 6 * pace ** 1.5 * near
          s.ox += (ux / len) * push
          s.oy += (uy / len) * push
          const o = Math.hypot(s.ox, s.oy)
          if (o > 24) {
            s.ox *= 24 / o
            s.oy *= 24 / o
          }
          if (d < grip) {
            const f = (1 - d / grip) ** 2
            s.dx += ux * 0.5 * f
            s.dy += uy * 0.5 * f
            const m = Math.hypot(s.dx, s.dy)
            if (m > 34) {
              s.dx *= 34 / m
              s.dy *= 34 / m
            }
          }
          stirred.add(s)
        }
      }
    }
    prev = p
    wake()
  }
  addEventListener('pointermove', onMove, { passive: true })

  return () => {
    cancelAnimationFrame(raf)
    resized.disconnect()
    seen.disconnect()
    removeEventListener('resize', fit)
    removeEventListener('scroll', onScroll)
    removeEventListener('pointermove', onMove)
    document.removeEventListener('visibilitychange', wake)
  }
}

// Hero: edge to edge of the window, from just under the bar's links down behind the
// statement's first line. The canvas is fixed, so the statement scrolls up over still
// water and covers it; the pointer stirs it at the top of the page only. On every screen.
export function HeroWater() {
  const [on, setOn] = useState(false)
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => setOn(!reducedMotion()), [])
  useEffect(() => {
    const canvas = ref.current
    const hero = canvas?.closest<HTMLElement>('.hero')
    const statement = hero?.querySelector<HTMLElement>('.hero-top')
    if (!on || !canvas || !hero || !statement) return
    let edgeTop = 0
    return water(canvas, hero, {
      size: () => {
        const bar = hero.getBoundingClientRect().top + scrollY
        // Where the water has faded out: well into the statement, and never higher than a share
        // of the hero, so a statement set large or on more lines leaves the water its room.
        edgeTop = bar + Math.max(statement.offsetTop + 100, hero.offsetHeight * 0.42 + 60)
        const h = Math.round(Math.max(bar + statement.offsetTop + statement.offsetHeight * 0.6, edgeTop + 20))
        return { w: document.documentElement.clientWidth, h, fade: (y) => smooth(clamp((y - bar + 10) / 70)) }
      },
      edge: () => edgeTop - scrollY,
      // Three wheel notches of 100 px, about three quarters of the way to where the water has gone at 1280×720.
      still: () => scrollY > 300,
    })
  }, [on])
  if (!on) return null
  return (
    // biome-ignore lint/a11y/noAriaHiddenOnFocusable: a canvas without tabindex takes no focus; the water is decoration
    <canvas
      ref={ref}
      aria-hidden="true"
      className="hero-glints pointer-events-none fixed top-0 left-0 -z-1"
    />
  )
}

// Contact: the same water in a frame beside the call, cut clean at its edges. Wide
// screens with a mouse only; the section takes it into its grid (the with-water variant).
export function ContactWater() {
  const [on, setOn] = useState(false)
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => setOn(!reducedMotion() && matchMedia('(pointer: fine) and (min-width: 56rem)').matches), [])
  useEffect(() => {
    const canvas = ref.current
    const frame = canvas?.parentElement
    if (!on || !canvas || !frame) return
    return water(canvas, frame, {
      size: () => ({ w: frame.clientWidth, h: frame.clientHeight, fade: () => 1 }),
    })
  }, [on])
  if (!on) return null
  return (
    <div
      aria-hidden="true"
      className="contact-water relative col-start-2 row-span-2 row-start-1 aspect-[16/10] overflow-hidden rounded-frame bg-surface after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_var(--color-hairline)] max-[56rem]:hidden"
    >
      <canvas ref={ref} className="block" />
    </div>
  )
}
