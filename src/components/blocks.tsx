import { getImageProps, type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
import { links } from '@/content/links'
import type { Capability, Content, Row } from '@/content/types'
import { Icon } from './icons'
import { Magnetic } from './magnetic'
import { Roll } from './roll'
import { button, link } from './styles'
import { ContactWater } from './water'

// A plain <img> with the attributes next/image computes. The next/image component
// itself calls img.decode() on load, and with it Chromium draws the pinned scenes'
// screenshots blurred (measured against the mockup: 1.4% of the frame differs).
// `sizes` is the width the layout gives the screenshot; the lens reads the full
// original from data-full, since it magnifies well past the displayed width.
export function Screenshot({
  image,
  alt,
  sizes,
  eager = false,
  lens = false,
  className,
}: {
  image: StaticImageData
  alt: string
  sizes: string
  eager?: boolean
  lens?: boolean
  className?: string
}) {
  const { props } = getImageProps({ src: image, alt, sizes, quality: 90, loading: eager ? 'eager' : 'lazy' })
  return (
    // biome-ignore lint/performance/noImgElement: the attributes come from getImageProps
    <img
      {...props}
      // The browser's default, as in the mockup: with getImageProps' decoding="async",
      // Chromium now and then draws a pinned scene's screenshot from another decode.
      decoding={undefined}
      alt={alt}
      data-full={lens ? image.src : undefined}
      className={className}
    />
  )
}

// A section title over a hairline, with an optional count on the right.
export function SectionHead({
  id,
  title,
  count,
  titleClass = 'm-0 text-section',
}: {
  id: string
  title: string
  count?: string
  titleClass?: string
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-5">
      <h2 id={id} className={titleClass}>
        {title}
      </h2>
      {count && <span className="text-[0.9375rem] text-ink-quiet tabular-nums">{count}</span>}
    </div>
  )
}

// A title column beside a wider body column.
export function Split({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="wrap grid grid-cols-[minmax(12rem,1fr)_2fr] gap-x-[clamp(2rem,6vw,6rem)] gap-y-8 pt-[clamp(5rem,11vw,9rem)] narrow:grid-cols-1"
    >
      <h2 id={id} className="m-0 text-section">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export const splitText = 'mt-0 mb-5 max-w-[56ch] text-[1.1875rem] leading-[1.55]'

export function Capabilities({ items, flush = false }: { items: Capability[]; flush?: boolean }) {
  return (
    <ul
      className={`m-0 grid list-none grid-cols-3 p-0 narrow:grid-cols-1 ${flush ? '' : 'mt-9 border-t border-hairline'}`}
    >
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`pt-[1.4rem] pr-6 narrow:border-b narrow:border-l-0 narrow:border-hairline narrow:px-0 narrow:py-[1.1rem] ${i > 0 ? 'border-l border-hairline pl-6' : ''}`}
        >
          <strong className="mb-[0.4rem] block font-semibold">{item.title}</strong>
          <span className="text-[0.9688rem] text-ink-muted">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

export function Rows({ rows }: { rows: Row[] }) {
  return (
    <ul className="m-0 grid list-none gap-[0.9rem] p-0">
      {rows.map((row) => (
        <li
          key={row.text}
          className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-hairline pb-[0.9rem] narrow:grid-cols-1"
        >
          <span>{row.text}</span>
          <span className="text-right text-ink-muted narrow:text-left">{row.aside}</span>
        </li>
      ))}
    </ul>
  )
}

export function Elsewhere({
  items,
  className = '',
}: {
  items: { label: string; href: string }[]
  className?: string
}) {
  return (
    <ul className={`m-0 flex list-none flex-wrap gap-x-7 gap-y-3 p-0 ${className}`}>
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href} className={link.elsewhere}>
            <Roll text={item.label} /> <Icon name="arrow" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Contact({ t }: { t: Content['site'] }) {
  return (
    <section
      aria-labelledby="contact-title"
      className="wrap pt-[clamp(6rem,14vw,11rem)] pb-[clamp(3rem,6vw,5rem)] with-water:grid with-water:grid-cols-[minmax(0,1fr)_minmax(16rem,30rem)] with-water:items-end with-water:gap-x-[clamp(2rem,6vw,6rem)]"
    >
      <h2 id="contact-title" className="col-start-1 m-0 max-w-[14ch] text-display text-balance">
        {t.contact.title}
      </h2>
      <div className="col-start-1 mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
        <Magnetic href={links.linkedin} className={button.large}>
          <Roll text={t.getInTouch} /> <Icon name="arrow" />
        </Magnetic>
        <Elsewhere
          items={[
            { label: links.email, href: `mailto:${links.email}` },
            { label: t.contact.github, href: links.github },
            { label: t.contact.linkedin, href: links.linkedin },
          ]}
        />
      </div>
      <ContactWater />
    </section>
  )
}

// A page header: title, then its lede.
export function PageHead({ children, title, lede }: { children?: ReactNode; title: string; lede: string }) {
  return (
    <header className="wrap pt-[clamp(3rem,9*var(--vh,1vh),6rem)] pb-[clamp(2.5rem,6*var(--vh,1vh),4rem)]">
      {children}
      <h1 className="m-0 text-display text-balance">{title}</h1>
      <p className="mt-6 mb-0 max-w-[52ch] text-lede text-pretty text-ink-muted">{lede}</p>
    </header>
  )
}
