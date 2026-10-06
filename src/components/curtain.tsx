'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react'

export type CurtainLabels = { home: string; work: string; about: string; projects: Record<string, string> }

type Phase = 'idle' | 'covering' | 'covered' | 'lifting'

const CurtainContext = createContext<(href: string) => boolean>(() => false)

// Starts a curtain navigation; false means the caller lets the link navigate itself.
export const useCurtain = () => useContext(CurtainContext)

// How a page came into view: the document's first load, the curtain lifting off it,
// or a navigation without the curtain (reduced motion, back and forward).
export type Arrival = 'load' | 'curtain' | 'direct'

const ArrivalContext = createContext<(fn: (via: Arrival) => void) => () => void>((fn) => {
  fn('load')
  return () => {}
})

// Calls back once the page is in view: at once, or as the curtain starts lifting.
// Returns a function that cancels a call still waiting for the curtain.
export const useArrival = () => useContext(ArrivalContext)

// Where sequential focus starts after a navigation: the hash target, or the top of
// the page as after a full load. Focusing then blurring moves the start silently.
function resetFocusStart(hash: string) {
  const target = (hash && document.getElementById(decodeURIComponent(hash.slice(1)))) || document.body
  const hadIndex = target.hasAttribute('tabindex')
  if (!hadIndex) target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
  target.blur()
  if (!hadIndex) target.removeAttribute('tabindex')
}

export function Curtain({ labels, children }: { labels: CurtainLabels; children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('idle')
  const [label, setLabel] = useState('')
  const [pending, startTransition] = useTransition()
  const navigating = useRef(false)
  const panel = useRef<HTMLDivElement>(null)
  // While the curtain hides a page, the calls waiting for it to lift.
  const waiting = useRef<Set<() => void> | null>(null)
  // Set once the first page is mounted: its children's effects run before this one.
  const loaded = useRef(false)
  useEffect(() => {
    loaded.current = true
  }, [])

  const arrive = useCallback((fn: (via: Arrival) => void) => {
    const queue = waiting.current
    if (!queue) {
      fn(loaded.current ? 'direct' : 'load')
      return () => {}
    }
    const call = () => fn('curtain')
    queue.add(call)
    return () => queue.delete(call)
  }, [])

  const labelFor = useCallback(
    (url: URL) => {
      const parts = url.pathname.split('/').filter(Boolean)
      const slug = parts[parts.indexOf('projects') + 1]
      if (parts.includes('projects') && slug) return labels.projects[slug] ?? labels.home
      if (parts.includes('about')) return labels.about
      return url.hash === '#work' ? labels.work : labels.home
    },
    [labels],
  )

  const cover = useCallback(
    (href: string) => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false
      const url = new URL(href, location.href)
      // A section of the current page scrolls; it does not need a curtain.
      if (url.pathname === location.pathname && url.hash) return false
      setLabel(labelFor(url))
      setPhase('covering')
      // Leave only once the curtain has really closed: a fixed delay can run ahead
      // of the animation on a busy page, and the old page would show through.
      let gone = false
      const go = () => {
        if (gone) return
        gone = true
        setPhase('covered')
        navigating.current = true
        waiting.current = new Set()
        startTransition(() => router.push(href))
      }
      panel.current?.addEventListener('animationend', go, { once: true })
      setTimeout(go, 1200)
      return true
    },
    [labelFor, router],
  )

  // The new page is rendered once the navigation transition settles: lift.
  useEffect(() => {
    if (pending || !navigating.current || phase !== 'covered') return
    navigating.current = false
    resetFocusStart(location.hash)
    requestAnimationFrame(() =>
      setTimeout(() => {
        setPhase('lifting')
        const calls = waiting.current ?? []
        waiting.current = null
        for (const call of calls) call()
        setTimeout(() => setPhase('idle'), 900)
      }, 140),
    )
  }, [pending, phase])

  // Navigations without the curtain (reduced motion, back and forward) move the
  // focus start too.
  const shown = useRef(pathname)
  useEffect(() => {
    if (shown.current === pathname) return
    shown.current = pathname
    if (!navigating.current) resetFocusStart(location.hash)
  }, [pathname])

  const state = phase === 'idle' ? '' : `is-${phase}`
  return (
    <CurtainContext.Provider value={cover}>
      <ArrivalContext.Provider value={arrive}>
        <div className={`curtain ${state}`} aria-hidden="true">
          <div ref={panel} className="curtain-panel">
            <span className="curtain-label">
              <span>{label}</span>
            </span>
            <span className="curtain-bar" />
          </div>
        </div>
        {children}
      </ArrivalContext.Provider>
    </CurtainContext.Provider>
  )
}
