'use client'

import { useEffect } from 'react'

// Gallery screenshots below the fold settle into place as they arrive.
export function GallerySettle() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const frames = [...document.querySelectorAll('.gallery .frame')].filter(
      (frame) => frame.getBoundingClientRect().top > innerHeight,
    )
    for (const frame of frames) frame.classList.add('is-settling')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.remove('is-settling')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    for (const frame of frames) io.observe(frame)
    return () => io.disconnect()
  }, [])
  return null
}
