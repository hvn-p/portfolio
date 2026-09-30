import type { Fact, GalleryRow, Section, Shot } from '@/content/types'
import { Screenshot } from './blocks'
import { GallerySettle } from './gallery-settle'
import { Icon } from './icons'
import { link } from './styles'

export function Facts({ facts }: { facts: Fact[] }) {
  return (
    <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-x-8 gap-y-5 border-y border-hairline py-6">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="text-[0.8125rem] text-ink-quiet">{fact.label}</dt>
          <dd className="mt-1 mb-0 ml-0 text-[1rem]">
            {fact.href ? (
              <a href={fact.href} className={link.fact}>
                {fact.value} <Icon name="arrow" />
              </a>
            ) : (
              fact.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}

// A screenshot in its frame, with a hairline edge drawn over the image so dark
// captures keep their outline on the dark ground.
// Widths each layout gives a screenshot, for the image optimizer.
const sizes = {
  full: '(max-width: 48rem) 100vw, min(100vw, 90rem)',
  half: '(max-width: 48rem) 100vw, min(50vw, 45rem)',
  desktop: '(max-width: 48rem) 100vw, min(75vw, 67rem)',
  mobile: '(max-width: 48rem) 16rem, min(25vw, 23rem)',
}

function Frame({
  shot,
  eager,
  size,
  className = '',
}: {
  shot: Shot
  eager: boolean
  size: keyof typeof sizes
  className?: string
}) {
  return (
    <figure
      className={`frame relative m-0 overflow-hidden rounded-frame bg-surface after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_var(--color-hairline)] ${className}`}
    >
      <Screenshot
        image={shot.image}
        alt={shot.alt}
        sizes={sizes[size]}
        eager={eager}
        className="h-auto w-full object-top [transition:transform_1.4s_var(--ease-soft),filter_0.45s_var(--ease-soft)]"
      />
    </figure>
  )
}

const gap = 'gap-[clamp(1rem,2vw,1.5rem)]'

function Row({ row, eager }: { row: GalleryRow; eager: boolean }) {
  if (row.layout === 'full') return <Frame shot={row.shot} eager={eager} size="full" />
  if (row.layout === 'two-up') {
    return (
      <div className={`grid grid-cols-[1fr_1fr] ${gap} narrow:grid-cols-1`}>
        {row.shots.map((shot) => (
          <Frame key={shot.alt} shot={shot} eager={eager} size="half" />
        ))}
      </div>
    )
  }
  const [desktop, mobile] = row.shots
  return (
    <div className={`grid grid-cols-[minmax(0,1fr)_minmax(0,0.34fr)] items-start ${gap} narrow:grid-cols-1`}>
      <Frame shot={desktop} eager={eager} size="desktop" />
      <Frame shot={mobile} eager={eager} size="mobile" className="narrow:max-w-[16rem]" />
    </div>
  )
}

// Galleries and text sections, in order. Only the first screenshot loads eagerly.
export function CaseSections({ sections }: { sections: Section[] }) {
  let first = true
  const blocks = sections.map((section) => {
    if (section.kind === 'text') {
      return (
        <section
          key={section.id}
          aria-labelledby={section.id}
          className="wrap grid grid-cols-[minmax(12rem,1fr)_2fr] gap-x-[clamp(2rem,6vw,6rem)] gap-y-4 pt-[clamp(4rem,9vw,7rem)] pb-[clamp(1rem,3vw,2rem)] narrow:grid-cols-1"
        >
          <h2 id={section.id} className="m-0 text-[1.25rem] font-semibold tracking-[-0.01em]">
            {section.title}
          </h2>
          <div>
            {section.paragraphs.map((text) => (
              <p key={text} className="mt-0 mb-[1.1rem] max-w-[60ch] text-[1.125rem]">
                {text}
              </p>
            ))}
            <ul className="m-0 max-w-[60ch] list-disc pl-[1.1rem] text-ink">
              {section.bullets.map((text) => (
                <li key={text} className="mb-[0.55rem] marker:text-ink-quiet">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )
    }
    const key = (row: GalleryRow) => (row.layout === 'full' ? row.shot.alt : row.shots[0].alt)
    const rows = section.rows.map((row, i) => <Row key={key(row)} row={row} eager={first && i === 0} />)
    first = false
    return (
      <div key={key(section.rows[0])} className={`gallery wrap grid ${gap} pt-[clamp(2.5rem,5vw,4rem)]`}>
        {rows}
      </div>
    )
  })
  return (
    <>
      {blocks}
      <GallerySettle />
    </>
  )
}
