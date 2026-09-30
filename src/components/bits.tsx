import { links } from '@/content/links'
import type { Content } from '@/content/types'
import { BrandIcon } from './icons'

type Site = Content['site']

// The one spot of color: a status dot that pulses like an online indicator.
export function Availability({ text, className = '' }: { text: string; className?: string }) {
  return (
    <p className={`m-0 inline-flex items-center gap-[0.7rem] text-[0.9375rem] text-ink ${className}`}>
      <span
        aria-hidden="true"
        className="relative size-[0.55rem] flex-none rounded-full bg-status-online after:absolute after:inset-0 after:rounded-full after:bg-status-online motion-safe:after:animate-status"
      />
      {text}
    </p>
  )
}

export function Socials() {
  const item =
    'grid size-9 place-items-center rounded-full text-ink-muted no-underline [transition:color_0.25s_var(--ease-soft),background-color_0.25s_var(--ease-soft)] hover:bg-[rgb(237_235_230/0.08)] hover:text-ink narrow:size-8'
  return (
    <ul className="m-0 flex list-none gap-1 p-0">
      <li>
        <a href={links.linkedin} aria-label="LinkedIn" className={item}>
          <BrandIcon name="linkedin" />
        </a>
      </li>
      <li>
        <a href={links.github} aria-label="GitHub" className={item}>
          <BrandIcon name="github" />
        </a>
      </li>
    </ul>
  )
}

// FIXME: fake. French and Spanish are announced but not selectable yet.
export function Languages({ t, inMenu = false }: { t: Site['languages']; inMenu?: boolean }) {
  const option =
    'cursor-pointer rounded-[6px] border-0 bg-transparent px-[0.45rem] py-[0.3rem] text-ink-muted aria-pressed:text-ink aria-pressed:underline aria-pressed:underline-offset-[0.3em] disabled:cursor-not-allowed disabled:text-ink-quiet'
  return (
    // biome-ignore lint/a11y/useSemanticElements: a group of toggles, not a form field set
    <div
      role="group"
      aria-label={t.label}
      className={`flex gap-[0.2rem] text-[0.8125rem] ${inMenu ? '' : 'narrow:hidden'}`}
    >
      <button type="button" aria-pressed="true" lang="en" className={option}>
        EN
      </button>
      <button type="button" aria-pressed="false" lang="fr" disabled title={t.soon.fr} className={option}>
        FR
      </button>
      <button type="button" aria-pressed="false" lang="es" disabled title={t.soon.es} className={option}>
        ES
      </button>
    </div>
  )
}
