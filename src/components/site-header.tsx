'use client'

import { usePathname } from 'next/navigation'
import { type CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { links } from '@/content/links'
import type { Content } from '@/content/types'
import { type Locale, localePath, sectionOf, stripLocale } from '@/i18n'
import { Availability, Languages, Socials } from './bits'
import { Icon } from './icons'
import { Magnetic } from './magnetic'
import { Monogram } from './monogram'
import { Roll } from './roll'
import { button } from './styles'
import { Link } from './transition-link'

type Props = { lang: Locale; t: Content['site'] }

const navLink =
  'text-[0.9375rem] text-ink-muted no-underline [transition:color_0.25s_var(--ease-soft)] hover:text-ink aria-[current=page]:text-ink'

export function SiteHeader({ lang, t }: Props) {
  const pathname = usePathname()
  const section = sectionOf(pathname)
  const path = stripLocale(pathname)
  const bar = useRef<HTMLElement>(null)
  const burger = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  // Out of the way while going down, back when going up; a ground once scrolled.
  useEffect(() => {
    const el = bar.current
    if (!el) return
    let lastY = scrollY
    let ticking = false
    const frame = () => {
      ticking = false
      const y = scrollY
      el.toggleAttribute('data-scrolled', y > 8)
      if (y < 140 || y < lastY - 3) el.removeAttribute('data-hidden')
      // Kept in view while it holds keyboard focus. Not just any focus: after the
      // menu closes, focus returns to its button, and a tap would pin the bar.
      else if (y > lastY + 3 && !el.querySelector(':focus-visible')) el.setAttribute('data-hidden', '')
      lastY = y
    }
    const request = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }
    const reveal = () => el.removeAttribute('data-hidden')
    frame()
    addEventListener('scroll', request, { passive: true })
    addEventListener('resize', request)
    el.addEventListener('focusin', reveal)
    return () => {
      removeEventListener('scroll', request)
      removeEventListener('resize', request)
      el.removeEventListener('focusin', reveal)
    }
  }, [])

  // The circle grows from the burger and reaches the farthest corner.
  const placeCircle = useCallback(() => {
    const lines = burger.current?.querySelector('.burger-lines')?.getBoundingClientRect()
    if (!lines || !menu.current) return
    const cx = lines.left + lines.width / 2
    const cy = lines.top + lines.height / 2
    const r = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy)) + 20
    menu.current.style.setProperty('--cx', `${cx}px`)
    menu.current.style.setProperty('--cy', `${cy}px`)
    menu.current.style.setProperty('--r', `${r}px`)
  }, [])

  // focus: whether focus follows the menu, into its first link when it opens and
  // back to the button when it closes.
  const toggle = useCallback(
    (next: boolean, focus = true) => {
      placeCircle()
      document.documentElement.classList.toggle('menu-open', next)
      for (const el of document.querySelectorAll<HTMLElement>('main, footer, #skip')) el.inert = next
      setOpen(next)
      if (!focus) return
      if (next) {
        setTimeout(() => menu.current?.querySelector('a')?.focus({ preventScroll: true }), 350)
      } else {
        burger.current?.focus({ preventScroll: true })
      }
    },
    [placeCircle],
  )

  // Escape closes, and so does leaving the small-screen layout. A resize that keeps
  // it, such as turning the phone, moves the burger: the circle follows.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && toggle(false)
    const small = matchMedia('(max-width: 48rem)')
    const onResize = () => !small.matches && toggle(false)
    addEventListener('keydown', onKey)
    addEventListener('resize', placeCircle)
    small.addEventListener('change', onResize)
    return () => {
      removeEventListener('keydown', onKey)
      removeEventListener('resize', placeCircle)
      small.removeEventListener('change', onResize)
    }
  }, [open, toggle, placeCircle])

  const workHref = localePath(lang, '/#work')
  const aboutHref = localePath(lang, '/about')
  const current = (name: 'work' | 'about') => (section === name ? ('page' as const) : undefined)

  return (
    <>
      <header
        ref={bar}
        className="fixed inset-x-0 top-0 z-30 [transition:background-color_0.4s_var(--ease-soft),box-shadow_0.4s_var(--ease-soft),translate_0.5s_var(--ease-soft)] data-hidden:-translate-y-full data-scrolled:bg-[rgb(13_13_14/0.94)] data-scrolled:shadow-[0_1px_0_var(--color-hairline)] in-[.menu-open]:translate-y-0! in-[.menu-open]:bg-transparent! in-[.menu-open]:shadow-none!"
      >
        <div className="wrap flex h-(--bar-h) items-center justify-between gap-6">
          <span className="block h-[1.55rem] w-[2.06rem] flex-none narrow:h-[1.3rem] narrow:w-[1.73rem]">
            <Link
              href={localePath(lang, '/')}
              aria-label={t.homeLabel}
              className="brand block w-full text-ink no-underline"
            >
              <Monogram />
            </Link>
          </span>
          <nav
            aria-label={t.nav.label}
            className="flex items-center gap-[clamp(1rem,2.5vw,2.25rem)] narrow:in-[.js]:hidden"
          >
            <ul className="m-0 flex list-none gap-[clamp(1rem,2.5vw,2.25rem)] p-0 narrow:hidden">
              <li>
                <Link href={workHref} aria-current={current('work')} className={navLink}>
                  <Roll text={t.nav.work} />
                </Link>
              </li>
              <li>
                <Link href={aboutHref} aria-current={current('about')} className={navLink}>
                  <Roll text={t.nav.about} />
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-[0.6rem]">
              <Socials />
              <Magnetic href={links.linkedin} className={button.nav}>
                <Roll text={t.getInTouch} /> <Icon name="arrow" />
              </Magnetic>
            </div>
            <Languages t={t.languages} lang={lang} path={path} />
          </nav>
          <button
            ref={burger}
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="menu"
            // Focus moves into the menu only when it opens from the keyboard, a click
            // without a pointer (detail 0). Safari leaves a tapped button unfocused,
            // so focus moved by script would ring the first link.
            onClick={(e) => toggle(!open, open || e.detail === 0)}
          >
            <span className="burger-lines" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="burger-label" aria-hidden="true">
              <span>{t.menu.open}</span>
              <span>{t.menu.close}</span>
            </span>
            <span className="sr-only">{open ? t.menu.closeLabel : t.menu.openLabel}</span>
          </button>
        </div>
      </header>
      <nav
        ref={menu}
        id="menu"
        className="menu"
        aria-label={t.menu.label}
        inert={!open}
        // The wheel scrolls the menu natively: smooth scrolling pauses with the page
        // behind it, and would otherwise swallow the wheel here too.
        data-lenis-prevent
      >
        <div className="wrap menu-inner">
          <ul className="menu-links">
            {[
              { href: workHref, label: t.nav.work, current: current('work') },
              { href: aboutHref, label: t.nav.about, current: current('about') },
            ].map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={item.current} onClick={() => toggle(false, false)}>
                  <span className="ml" style={{ '--i': i } as CSSProperties}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <a href={links.linkedin}>
                <span className="ml" style={{ '--i': 2 } as CSSProperties}>
                  {t.getInTouch}
                </span>
              </a>
            </li>
          </ul>
          <div className="menu-foot">
            <Availability text={t.availability} className="basis-full" />
            <Socials />
            <Languages t={t.languages} lang={lang} path={path} inMenu />
          </div>
        </div>
      </nav>
    </>
  )
}
