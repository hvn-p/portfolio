'use client'

// Home page motion, ported from mockup/site.js with its own formulas.

import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useArrival } from './curtain'

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))
const easeOut = (t: number) => 1 - (1 - t) ** 3
const smooth = (t: number) => t * t * (3 - 2 * t)
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

// Runs fn now and on every scroll or resize, at most once per frame.
function onScrollFrame(fn: () => void) {
  let ticking = false
  const request = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      fn()
    })
  }
  fn()
  addEventListener('scroll', request, { passive: true })
  addEventListener('resize', request)
  return () => {
    removeEventListener('scroll', request)
    removeEventListener('resize', request)
  }
}

// The statement's last words cycle through what Pierre builds.
export function Rotator({ words }: { words: string[] }) {
  const [k, setK] = useState(0)
  useEffect(() => {
    if (reducedMotion()) return
    const id = setInterval(() => {
      if (!document.hidden) setK((i) => (i + 1) % words.length)
    }, 2800)
    return () => clearInterval(id)
  }, [words.length])
  return (
    <span
      aria-hidden="true"
      style={{ '--k': k } as CSSProperties}
      className="rotator inline-block h-[1.02em] overflow-hidden align-bottom"
    >
      {words.map((word, i) => (
        <span
          key={word}
          className={`block [transform:translateY(calc(var(--k,0)*-100%))] ${i === k ? 'opacity-100 [transition:transform_0.8s_var(--ease-soft),opacity_0.45s_var(--ease-soft)_0.15s]' : 'opacity-0 [transition:transform_0.8s_var(--ease-soft),opacity_0.45s_var(--ease-soft)]'}`}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

// The hero name's letters sink below the baseline one after another; the bar's
// monogram waits for them to be gone.
export function HeroMotion() {
  const arrive = useArrival()

  // The intro on an arrival by the router, once the page is in view; on the document's
  // first load, the first-paint script has started it already (layout.tsx).
  useEffect(() => {
    if (reducedMotion()) return
    const root = document.documentElement
    let played = false
    let timer = 0
    const cancel = arrive((via) => {
      if (via === 'load' || root.classList.contains('intro')) return
      played = true
      const at = via === 'curtain' ? 300 : 0
      root.style.setProperty('--intro-at', `${at}ms`)
      root.classList.add('intro')
      timer = window.setTimeout(() => root.classList.remove('intro'), 2600 + at)
    })
    return () => {
      cancel()
      if (!played) return
      clearTimeout(timer)
      root.classList.remove('intro')
      root.style.removeProperty('--intro-at')
    }
  }, [arrive])

  useEffect(() => {
    const root = document.documentElement
    const hero = document.querySelector<HTMLElement>('.hero')
    const paths = [...document.querySelectorAll<SVGPathElement>('.hero-name .wordmark path')]
    if (reducedMotion() || !hero || !paths.length) return
    root.classList.add('has-hero-name')
    const n = paths.length
    const spread = 0.035
    const stop = onScrollFrame(() => {
      const p = clamp(scrollY / (hero.offsetHeight * 0.55))
      paths.forEach((path, i) => {
        const lp = clamp((p - i * spread) / (1 - (n - 1) * spread))
        path.style.setProperty('--s', smooth(lp).toFixed(3))
      })
      root.classList.toggle('name-passed', p > 0.97)
    })
    return () => {
      stop()
      root.classList.remove('has-hero-name', 'name-passed')
    }
  }, [])
  return null
}

// Scenes, pinned on wide screens with motion allowed: the title stands alone, then
// shrinks down to its label place while the screenshot opens above it from a
// centre line; the next screenshots wipe in.
export function ScenesMotion() {
  useEffect(() => {
    const list = document.querySelector<HTMLElement>('.scenes')
    if (!list) return
    const scenes = [...list.querySelectorAll<HTMLElement>('.scene')]
    const reduce = reducedMotion()
    const wide = matchMedia('(min-width: 56rem)')

    const frame = () => {
      if (!list.classList.contains('scenes-pinned')) return
      const vh = innerHeight
      const vw = document.documentElement.clientWidth
      const wrap = document.querySelector('.wrap')
      const g = (wrap && parseFloat(getComputedStyle(wrap).paddingLeft)) || vw * 0.04
      // Taller frame, capped at the screenshot's own height so a portrait screen never stretches it.
      const fw = vw - 2 * g
      const fh = Math.min(vh * 0.7, fw / 1.6)
      // On a tall screen the capped frame and its label sit centred instead of hugging the top.
      const fx = g
      const fy = Math.max(vh * 0.12, (vh - fh - 200) / 2)
      for (const scene of scenes) {
        const r = scene.getBoundingClientRect()
        if (r.bottom < -vh || r.top > vh * 1.5) continue
        const t = clamp(-r.top / (r.height - vh))
        const move = smooth(clamp(t / 0.16))
        const open = smooth(clamp((t - 0.1) / 0.18))
        const shots = [...scene.querySelectorAll<HTMLElement>('.shot')]
        const m = shots.length

        shots.forEach((shot, k) => {
          const img = shot.querySelector('img')
          if (!img) return
          const ratio = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1.6
          const settle = k === 0 ? 1 + 0.12 * (1 - open) : 1
          const start = k === 0 ? 0.3 : 0.34 + (k - 1) * 0.33 + 0.1
          const drift = clamp((t - start) / 0.3) * Math.max(0, fw / ratio - fh) * 0.5
          // Keep the frame centre on the same picture point while the picture settles.
          const px = fw / 2
          const py = fh / 2 + drift
          const x = fx + fw / 2 - px * settle
          const y = fy + fh / 2 - py * settle
          img.style.width = `${fw}px`
          img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${settle})`
          const wipe = k === 0 ? open : easeOut(clamp((t - (0.34 + (k - 1) * 0.33)) / 0.14))
          const half = ((1 - open) * fh) / 2
          const top = k === 0 ? fy + half : fy + (1 - wipe) * fh
          const bottom = vh - fy - fh + (k === 0 ? half : 0)
          shot.style.clipPath = `inset(${top}px ${vw - fx - fw}px ${bottom}px ${fx}px round 16px)`
          shot.style.visibility = wipe > 0.001 ? 'visible' : 'hidden'
          shot.dataset.wipe = String(wipe)
        })

        const title = scene.querySelector<HTMLElement>('.scene-title')
        if (!title) continue
        const tw = title.offsetWidth
        const th = title.offsetHeight
        const fs = parseFloat(getComputedStyle(title).fontSize)
        const ke = Math.min(68, vw * 0.047) / fs
        const kt = 1 + (ke - 1) * move
        const x0 = (vw - tw) / 2
        const y0 = vh * 0.44 - th / 2
        const x1 = g
        const y1 = fy + fh + vh * 0.032 - th * ke * 0.08
        scene.style.setProperty('--fb', `${fy + fh}px`)
        title.style.transform = `translate3d(${x0 + (x1 - x0) * move}px, ${y0 + (y1 - y0) * move}px, 0) scale(${kt})`
        scene.style.setProperty('--sub', (1 - clamp(move / 0.35)).toFixed(3))
        scene.querySelectorAll<HTMLElement>('.scene-details > *').forEach((el, i) => {
          el.style.setProperty('--dt', easeOut(clamp((t - 0.2 - i * 0.03) / 0.1)).toFixed(3))
        })
        scene.style.setProperty('--cap', clamp((open - 0.7) / 0.3).toFixed(3))
        const current = shots.reduce((c, s, k) => (Number(s.dataset.wipe) > 0.5 ? k : c), 0)
        const cap = scene.querySelector('.cap-text')
        const text = shots[current]?.dataset.caption ?? ''
        if (cap && cap.textContent !== text) {
          cap.textContent = text
          const count = scene.querySelector('.cap-count')
          if (count) count.textContent = `${current + 1} / ${m}`
        }
      }
    }

    const setPinned = () => {
      const on = !reduce && wide.matches
      list.classList.toggle('scenes-pinned', on)
      if (!on) {
        for (const el of list.querySelectorAll('.scene-title, .shot, .shot img')) el.removeAttribute('style')
      }
      frame()
    }
    setPinned()
    wide.addEventListener('change', setPinned)
    const stop = onScrollFrame(frame)
    // Screenshot sizes feed the formulas: redraw as they load.
    const imgs = [...list.querySelectorAll('img')]
    for (const img of imgs) img.addEventListener('load', frame)
    return () => {
      stop()
      wide.removeEventListener('change', setPinned)
      for (const img of imgs) img.removeEventListener('load', frame)
    }
  }, [])
  return null
}

// Signature interaction: a lens replaces the cursor over project screenshots.
export function Lens({ label }: { label: string }) {
  const [on, setOn] = useState(false)
  const lens = useRef<HTMLDivElement>(null)
  const view = useRef<HTMLDivElement>(null)
  const zoomed = useRef<HTMLImageElement>(null)
  const ring = useRef<SVGTextPathElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const frames = document.querySelectorAll('.project-link .frame, .project-link .shot')
    if (reducedMotion() || !matchMedia('(pointer: fine)').matches || !frames.length) return
    setOn(true)
    root.classList.add('has-lens')
    return () => root.classList.remove('has-lens')
  }, [])

  useEffect(() => {
    const el = lens.current
    const lensView = view.current
    const img = zoomed.current
    const text = ring.current
    if (!on || !el || !lensView || !img || !text) return
    const ZOOM = 1.9

    // Where the picture actually sits inside its box, since frames crop with object-fit: cover.
    const pictureBox = (picture: HTMLImageElement) => {
      const r = picture.getBoundingClientRect()
      if (getComputedStyle(picture).objectFit !== 'cover' || !picture.naturalWidth) return r
      const scale = Math.max(r.width / picture.naturalWidth, r.height / picture.naturalHeight)
      const w = picture.naturalWidth * scale
      const h = picture.naturalHeight * scale
      return { left: r.left + (r.width - w) / 2, top: r.top, width: w, height: h }
    }

    let active: HTMLElement | null = null
    let x = -999
    let y = -999
    let cx = x
    let cy = y
    let raf = 0
    const loop = () => {
      cx += (x - cx) * 0.24
      cy += (y - cy) * 0.24
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      const picture = active?.querySelector('img')
      if (picture) {
        const b = pictureBox(picture)
        const half = lensView.clientWidth / 2
        img.style.width = `${b.width * ZOOM}px`
        img.style.height = `${b.height * ZOOM}px`
        img.style.transform = `translate3d(${half - (cx - b.left) * ZOOM}px, ${half - (cy - b.top) * ZOOM}px, 0)`
      }
      const moving = Math.abs(x - cx) > 0.1 || Math.abs(y - cy) > 0.1
      raf = active || moving ? requestAnimationFrame(loop) : 0
    }

    const setActive = (target: HTMLElement | null) => {
      if (!target) {
        if (active) {
          active.classList.remove('is-lensed')
          active = null
          el.classList.remove('is-on')
        }
        return
      }
      if (target !== active) {
        active?.classList.remove('is-lensed')
        const entering = !active
        active = target
        const name = target.dataset.name ?? ''
        text.textContent = `${label} · ${name} · ${label} · ${name} · `
        target.classList.add('is-lensed')
        el.classList.add('is-on')
        if (entering) {
          cx = x
          cy = y
        }
      }
      // The visible screenshot can change under a still pointer as a scene advances.
      const picture = target.querySelector('img')
      const src = picture?.dataset.full || picture?.currentSrc || picture?.src || ''
      if (img.src !== src) img.src = src
      if (!raf) raf = requestAnimationFrame(loop)
    }

    // Hit-test from the pointer position, so scrolling under a still pointer also counts.
    const hitTest = () =>
      setActive(
        document.elementFromPoint(x, y)?.closest<HTMLElement>('.project-link .frame, .project-link .shot') ??
          null,
      )
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return
      x = e.clientX
      y = e.clientY
      hitTest()
    }
    const onScroll = () => {
      if (x > -999) hitTest()
    }
    const clear = () => setActive(null)
    addEventListener('pointermove', onMove, { passive: true })
    addEventListener('scroll', onScroll, { passive: true })
    document.documentElement.addEventListener('pointerleave', clear)
    addEventListener('blur', clear)
    return () => {
      removeEventListener('pointermove', onMove)
      removeEventListener('scroll', onScroll)
      document.documentElement.removeEventListener('pointerleave', clear)
      removeEventListener('blur', clear)
      cancelAnimationFrame(raf)
      active?.classList.remove('is-lensed')
    }
  }, [on, label])

  if (!on) return null
  return createPortal(
    <div ref={lens} className="lens" aria-hidden="true">
      <div className="lens-body">
        <div ref={view} className="lens-view">
          {/* biome-ignore lint/performance/noImgElement: a magnified copy of a screenshot already on the page */}
          <img ref={zoomed} alt="" />
        </div>
        <svg className="lens-ring" viewBox="0 0 208 208" aria-hidden="true">
          <defs>
            <path id="lens-path" d="M104,104 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0" />
          </defs>
          <text>
            <textPath ref={ring} href="#lens-path" textLength="590" lengthAdjust="spacing" />
          </text>
        </svg>
      </div>
    </div>,
    document.body,
  )
}
