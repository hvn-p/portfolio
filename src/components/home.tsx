import type { Content, Project } from '@/content/types'
import { type Locale, localePath } from '@/i18n'
import { Availability } from './bits'
import { Screenshot, SectionHead } from './blocks'
import { Clock } from './clock'
import { HeroMotion, Lens, Rotator, ScenesMotion } from './home-motion'
import { Icon } from './icons'
import { Roll } from './roll'
import { link } from './styles'
import { Link } from './transition-link'
import { Wordmark } from './wordmark'

export function Hero({ t, site }: { t: Content['home']; site: Content['site'] }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero wrap grid min-h-[calc(100svh-var(--bar-h))] grid-rows-[auto_1fr_auto_auto] pt-[clamp(2rem,7vh,5rem)] pb-5 short:pt-6"
    >
      <HeroMotion />
      <div className="hero-top row-[2] grid grid-cols-[minmax(0,1.9fr)_minmax(16rem,1fr)] items-end gap-x-[clamp(2rem,6vw,6rem)] gap-y-8 self-end narrow:grid-cols-1 short:gap-y-5">
        <p className="m-0 text-statement short:text-[2.25rem] tiny:text-(length:--statement-fit) short:tiny:text-[min(2.25rem,var(--statement-fit))]">
          {t.statement.first}
          <br />
          <span className="text-ink-muted">
            {t.statement.lead}
            <Rotator words={t.statement.rotating} />
            <span className="sr-only">{t.statement.spoken}</span>
          </span>
        </p>
        <div className="grid justify-items-start gap-[1.1rem] pb-2 short:gap-3">
          <Availability text={site.availability} />
          <p className="m-0 text-[0.9375rem] text-ink-muted">
            {site.location}
            <Clock suffix={site.localTime} />
          </p>
          <p className="m-0 max-w-[44ch] text-[1rem] leading-[1.5] text-pretty text-ink-muted shorter:hidden">
            {t.lede}
          </p>
        </div>
      </div>
      <h1 id="hero-title" className="hero-name row-[3] m-0 pt-[clamp(2rem,6vh,4rem)] short:pt-6">
        <span className="sr-only">{t.nameLabel}</span>
        <Wordmark cut="display" />
      </h1>
      <div className="hero-foot row-[4] mt-6 flex flex-wrap justify-between gap-4 border-t border-hairline pt-4 text-[0.875rem] text-ink-quiet short:mt-4">
        <span className="inline-flex items-center gap-3 after:h-px after:w-10 after:bg-[linear-gradient(90deg,var(--color-ink)_0_30%,var(--color-hairline-strong)_30%)] after:bg-size-[200%_100%] motion-safe:after:animate-cue">
          {t.scrollCue}
        </span>
        <span>{t.selectedWork}</span>
      </div>
    </section>
  )
}

const counter = (k: number, n: number) => `${String(k).padStart(2, '0')} / ${String(n).padStart(2, '0')}`

// One scene per project: its screenshots, then its label (scenes.css).
export function Scenes({
  lang,
  t,
  site,
  projects,
}: {
  lang: Locale
  t: Content['home']
  site: Content['site']
  projects: Project[]
}) {
  return (
    <section id="work" aria-labelledby="work-title" className="pt-[clamp(5rem,14vh,10rem)]">
      <div className="wrap">
        <SectionHead
          id="work-title"
          title={t.workTitle}
          count={t.projectCount}
          titleClass="m-0 text-[clamp(2.75rem,6.4vw,6rem)] leading-none font-semibold tracking-[-0.035em]"
        />
      </div>
      <ol className="scenes">
        {projects.map((project, k) => {
          const href = localePath(lang, `/projects/${project.slug}`)
          const shots = project.scene.shots
          return (
            <li key={project.slug} className="scene">
              <div className="scene-pin">
                <Link href={href} tabIndex={-1} aria-hidden="true" className="scene-shots project-link">
                  {shots.map((shot, i) => (
                    <div
                      key={shot.caption}
                      className="shot"
                      data-name={project.name}
                      data-caption={shot.caption}
                    >
                      <Screenshot image={shot.image} alt="" sizes="100vw" eager={i === 0} lens />
                    </div>
                  ))}
                </Link>
                <div className="scene-info">
                  <h3 className="scene-title">
                    <Link href={href}>{project.name}</Link>
                  </h3>
                  <p className="scene-sub">
                    <span>{counter(k + 1, projects.length)}</span>
                    <span>{project.scene.kind}</span>
                    <span>{project.scene.year}</span>
                  </p>
                  <div className="scene-details">
                    <p className="scene-line">{project.scene.line}</p>
                    <p className="scene-facts">{project.scene.facts}</p>
                    <Link href={href} className={link.text}>
                      <Roll text={site.openCaseStudy} /> <Icon name="right" />
                    </Link>
                  </div>
                </div>
                <p className="scene-caption" aria-hidden="true">
                  <span className="cap-text">{shots[0]?.caption}</span>
                  <span className="cap-count">1 / {shots.length}</span>
                </p>
              </div>
            </li>
          )
        })}
      </ol>
      <ScenesMotion />
      <Lens label={site.openProject} />
    </section>
  )
}
