'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const CLICKABLE = 'a[href], button:not(:disabled), [role="button"], label[for], summary, select'
const LENSED = '.project-link .frame, .project-link .shot'

// The line of text under a point, leading included so the gap between two lines still
// counts, or null when the point is not on one.
function textLine(x: number, y: number) {
  const node = document.caretPositionFromPoint
    ? document.caretPositionFromPoint(x, y)?.offsetNode
    : document.caretRangeFromPoint?.(x, y)?.startContainer
  if (node?.nodeType !== Node.TEXT_NODE || !node.textContent?.trim() || !node.parentElement) return null
  const style = getComputedStyle(node.parentElement)
  const size = Number.parseFloat(style.fontSize)
  const lineHeight = Number.parseFloat(style.lineHeight) || size * 1.2
  const range = document.createRange()
  range.selectNodeContents(node)
  for (const b of range.getClientRects()) {
    const mid = b.top + b.height / 2
    if (x >= b.left && x <= b.right && Math.abs(y - mid) <= Math.max(b.height, lineHeight) / 2)
      return { mid, size }
  }
  return null
}

// The cursor is a reticle: one ring that closes on anything clickable, flattens into a
// caret over text and widens into the lens over screenshots. The point is exact; the
// ring trails a little. Fine pointers with motion allowed only.
export function Reticle() {
  const [on, setOn] = useState(false)
  const ring = useRef<HTMLDivElement>(null)
  const point = useRef<HTMLDivElement>(null)
  const hitTest = useRef(() => {})
  const pathname = usePathname()
  const shown = useRef(pathname)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(pointer: fine)').matches)
      return
    setOn(true)
    const root = document.documentElement
    root.classList.add('has-reticle')
    return () => root.classList.remove('has-reticle', 'reticle-on', 'reticle-lensed')
  }, [])

  useEffect(() => {
    const r = ring.current
    const p = point.current
    if (!on || !r || !p) return
    const root = document.documentElement
    let x = -999
    let y = -999
    // ty is where the ring heads vertically: the pointer, or the middle of the line of text under it.
    let ty = y
    let rx = x
    let ry = y
    let raf = 0
    const loop = () => {
      rx += (x - rx) * 0.4
      ry += (ty - ry) * 0.4
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = Math.abs(x - rx) > 0.1 || Math.abs(ty - ry) > 0.1 ? requestAnimationFrame(loop) : 0
    }

    // Hit-test from the pointer position, so scrolling under a still pointer also counts.
    const test = () => {
      if (x <= -999) return
      const el = document.elementFromPoint(x, y)
      const lensed = root.classList.contains('has-lens') && !!el?.closest(LENSED)
      const target = !lensed && !!el?.closest(CLICKABLE)
      const line = lensed || target ? null : textLine(x, y)
      root.classList.toggle('reticle-lensed', lensed)
      r.classList.toggle('is-target', target)
      r.classList.toggle('is-text', !!line)
      p.classList.toggle('is-text', !!line)
      // The caret sits on the line, as tall as the text: the 24 px ring stretched to 1.1 em.
      if (line) r.style.setProperty('--caret', ((Math.max(16, line.size) * 1.1) / 24).toFixed(3))
      ty = line ? line.mid : y
      // Entering the lens, the ring starts from the pointer so it grows into the lens outline.
      if (lensed) {
        rx = x
        ry = y
      }
      if (!raf) raf = requestAnimationFrame(loop)
    }
    hitTest.current = test

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return
      x = e.clientX
      y = e.clientY
      if (!root.classList.contains('reticle-on')) {
        rx = x
        ry = y
        root.classList.add('reticle-on')
      }
      p.style.transform = `translate3d(${x}px, ${y}px, 0)`
      test()
    }
    const onDown = (e: PointerEvent) => {
      if (e.button === 0) r.classList.add('is-pressed')
    }
    const onUp = () => r.classList.remove('is-pressed')
    const hide = () => root.classList.remove('reticle-on')
    addEventListener('pointermove', onMove, { passive: true })
    addEventListener('scroll', test, { passive: true })
    addEventListener('pointerdown', onDown)
    addEventListener('pointerup', onUp)
    root.addEventListener('pointerleave', hide)
    addEventListener('blur', hide)
    return () => {
      removeEventListener('pointermove', onMove)
      removeEventListener('scroll', test)
      removeEventListener('pointerdown', onDown)
      removeEventListener('pointerup', onUp)
      root.removeEventListener('pointerleave', hide)
      removeEventListener('blur', hide)
      cancelAnimationFrame(raf)
      hitTest.current = () => {}
    }
  }, [on])

  // A new page can put something else under a still pointer.
  useEffect(() => {
    if (shown.current === pathname) return
    shown.current = pathname
    hitTest.current()
  }, [pathname])

  if (!on) return null
  return (
    <>
      <div ref={ring} className="reticle" aria-hidden="true">
        <svg viewBox="-32 -32 64 64" aria-hidden="true">
          <circle className="r-ring" r="12" />
        </svg>
      </div>
      <div ref={point} className="reticle-point" aria-hidden="true">
        <svg viewBox="-32 -32 64 64" aria-hidden="true">
          <circle className="r-dot" r="2" />
        </svg>
      </div>
    </>
  )
}
