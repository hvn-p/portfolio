'use client'

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'

// Wheel scrolling glides instead of stepping notch by notch, so the scroll-driven
// scenes follow a mouse as smoothly as a touchpad. Touch screens and reduced motion
// keep native scrolling (Lenis defaults). It pauses while the page itself cannot
// scroll, as under the open menu (autoToggle).
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, autoToggle: true, stopInertiaOnNavigate: true })
    return () => lenis.destroy()
  }, [])
  return null
}
