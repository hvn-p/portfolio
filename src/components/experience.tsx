'use client'

import { useEffect, useRef, useState } from 'react'
import type { Role } from '@/content/types'

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

// The index follows the entry being read, with a progress line; the big years
// drift behind the text when motion is allowed.
export function Experience({ roles, label }: { roles: Role[]; label: string }) {
  const [active, setActive] = useState(0)
  const list = useRef<HTMLOListElement>(null)
  const progress = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let ticking = false
    const frame = () => {
      ticking = false
      const ol = list.current
      if (!ol) return
      const vh = innerHeight
      const entries = [...ol.children] as HTMLElement[]
      let current = 0
      entries.forEach((entry, i) => {
        const r = entry.getBoundingClientRect()
        if (r.top < vh * 0.45) current = i
        if (!reduce) {
          const py = clamp((r.top + r.height / 2 - vh / 2) * -0.2, -40, 60)
          entry.querySelector<HTMLElement>('[data-year]')?.style.setProperty('--py', py.toFixed(1))
        }
      })
      setActive(current)
      const l = ol.getBoundingClientRect()
      progress.current?.style.setProperty('--p', clamp((vh * 0.45 - l.top) / l.height, 0, 1).toFixed(3))
    }
    const request = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }
    frame()
    addEventListener('scroll', request, { passive: true })
    addEventListener('resize', request)
    return () => {
      removeEventListener('scroll', request)
      removeEventListener('resize', request)
    }
  }, [])

  return (
    <div className="grid grid-cols-[minmax(13rem,1fr)_2fr] gap-x-[clamp(2rem,6vw,6rem)] gap-y-0 narrow:grid-cols-1">
      <nav
        aria-label={label}
        className="sticky top-[calc(var(--bar-h)+2.5rem)] grid grid-cols-[1px_1fr] gap-x-5 gap-y-0 self-start pt-10 narrow:hidden"
      >
        <div ref={progress} aria-hidden="true" className="relative bg-hairline">
          <span className="absolute inset-0 origin-top bg-ink [transform:scaleY(var(--p,0))]" />
        </div>
        <ol className="m-0 grid list-none gap-[0.35rem] p-0">
          {roles.map((role, i) => (
            <li key={role.id}>
              <a
                href={`#${role.id}`}
                aria-current={i === active ? 'true' : undefined}
                className="grid gap-[0.1rem] py-[0.55rem] text-ink-quiet no-underline [transition:color_0.35s_var(--ease-soft)] hover:text-ink aria-[current=true]:text-ink"
              >
                <span className="text-[0.8125rem] tabular-nums">{role.period}</span>
                <span className="text-[1.375rem] font-semibold tracking-[-0.015em]">{role.company}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <ol ref={list} className="m-0 list-none p-0">
        {roles.map((role) => (
          <li
            key={role.id}
            id={role.id}
            className="relative min-h-[calc(72*var(--vh,1vh))] border-t border-hairline pt-10 pb-16 *:relative *:z-1 narrow:min-h-0"
          >
            <span
              data-year
              aria-hidden="true"
              className="pointer-events-none absolute! top-3 right-[-0.04em] z-0! text-[clamp(6rem,17vw,15rem)] leading-[0.8] font-bold tracking-[-0.05em] text-transparent select-none [-webkit-text-stroke:1px_var(--color-hairline)] [transform:translateY(calc(var(--py,0)*1px))]"
            >
              {role.year}
            </span>
            <p className="mt-0 mb-[0.9rem] text-[0.9375rem] text-ink-quiet tabular-nums">{role.when}</p>
            <h3 className="m-0 text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.025em]">
              {role.company}
            </h3>
            <p className="mt-[0.6rem] mb-6 max-w-[52ch] text-[1.125rem] text-ink-muted">{role.what}</p>
            <ul className="m-0 max-w-[60ch] list-disc pl-[1.1rem]">
              {role.bullets.map((text) => (
                <li key={text} className="mb-[0.6rem] marker:text-ink-quiet">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-[1.4rem] mb-0 text-[0.9375rem] text-ink-quiet">{role.stack}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
