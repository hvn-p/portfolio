'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useArrival } from './curtain'

const inOrder = (els: Iterable<HTMLElement>) =>
  [...els].sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))

// The page builds as it comes into view, ported from mockup/site.js: rules draw from the
// left, titles rise line by line, the rest fades up (reveal.css). Each element runs once,
// the first time it crosses the reveal line, and what arrives together follows on in
// reading order. Through the curtain, it starts as the curtain lifts.
export function Reveals() {
  const pathname = usePathname()
  const arrive = useArrival()

  // biome-ignore lint/correctness/useExhaustiveDependencies: a new page brings new elements to reveal
  useEffect(() => {
    const pending = new Set(
      document.querySelectorAll<HTMLElement>(':is(.rv-fade, .rv-title, .rv-rule):not(.is-in)'),
    )
    const reveal = (el: HTMLElement, k: number) => {
      if (!pending.has(el)) return
      io.unobserve(el)
      pending.delete(el)
      el.style.setProperty('--rd', `${Math.min(k, 8) * 80}ms`)
      // Each line of a title rises a beat after the one above.
      let line = -1
      let top = -Infinity
      for (const word of el.querySelectorAll<HTMLElement>('.rv-word')) {
        if (word.offsetTop > top + 2) {
          top = word.offsetTop
          line++
        }
        word.style.setProperty('--l', String(line))
      }
      el.classList.add('is-in')
    }
    const io = new IntersectionObserver(
      (entries) => {
        inOrder(entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement)).forEach(reveal)
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    // The last rows of a page can stay below the reveal line even fully scrolled, or on
    // a page too short to scroll.
    const atEnd = () => {
      if (pending.size && scrollY + innerHeight >= document.documentElement.scrollHeight - 2) {
        inOrder(pending).forEach(reveal)
      }
    }

    let live = true
    let timer = 0
    const cancel = arrive((via) => {
      timer = window.setTimeout(
        () =>
          document.fonts.ready.then(() => {
            if (!live) return
            for (const el of pending) io.observe(el)
            atEnd()
            addEventListener('scroll', atEnd, { passive: true })
          }),
        via === 'curtain' ? 300 : 0,
      )
    })
    return () => {
      live = false
      cancel()
      clearTimeout(timer)
      io.disconnect()
      removeEventListener('scroll', atEnd)
    }
  }, [pathname, arrive])

  return null
}
