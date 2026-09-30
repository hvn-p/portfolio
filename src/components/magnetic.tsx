'use client'

import type { AnchorHTMLAttributes } from 'react'

const allowed = () =>
  matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches

// A button-link that leans toward the pointer, then settles back when it leaves.
export function Magnetic(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      onPointerMove={(e) => {
        if (!allowed()) return
        const el = e.currentTarget
        const r = el.getBoundingClientRect()
        el.style.transitionDuration = '0.2s, 0.3s'
        el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.12}px, ${(e.clientY - (r.top + r.height / 2)) * 0.2}px)`
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.transitionDuration = ''
        e.currentTarget.style.transform = ''
      }}
    />
  )
}
