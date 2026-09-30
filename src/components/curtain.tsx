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
      <div className={`curtain ${state}`} aria-hidden="true">
        <div ref={panel} className="curtain-panel">
          <span className="curtain-label">
            <span>{label}</span>
          </span>
          <span className="curtain-bar" />
        </div>
      </div>
      {children}
    </CurtainContext.Provider>
  )
}
