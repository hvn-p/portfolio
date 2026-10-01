import { links } from '@/content/links'
import type { Content } from '@/content/types'
import { LANG_COOKIE, type Locale, localePath, locales } from '@/i18n'
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

// The same page in each language. Following one remembers the choice, which the
// proxy then prefers to the browser's languages.
export function Languages({
  t,
  lang,
  path,
  inMenu = false,
}: {
  t: Site['languages']
  lang: Locale
  path: string
  inMenu?: boolean
}) {
  const option =
    'rounded-[6px] px-[0.45rem] py-[0.3rem] text-ink-muted no-underline aria-[current=true]:text-ink aria-[current=true]:underline aria-[current=true]:decoration-auto aria-[current=true]:underline-offset-[0.3em]'
  return (
    // biome-ignore lint/a11y/useSemanticElements: a group of links, not a form field set
    <div
      role="group"
      aria-label={t.label}
      className={`flex gap-[0.2rem] text-[0.8125rem] ${inMenu ? '' : 'narrow:hidden'}`}
    >
      {locales.map((l) => (
        <a
          key={l}
          href={localePath(l, path)}
          hrefLang={l}
          lang={l}
          title={t.names[l]}
          aria-current={l === lang ? 'true' : undefined}
          onClick={() => {
            // biome-ignore lint/suspicious/noDocumentCookie: a plain preference cookie, read by the proxy
            document.cookie = `${LANG_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`
          }}
          className={option}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  )
}
