import type { Project } from '@/content/types'
import { type Locale, localePath } from '@/i18n'
import { Screenshot } from './blocks'
import { Lens } from './home-motion'
import { Icon } from './icons'
import { Link } from './transition-link'

const frame =
  'frame relative aspect-16/10 overflow-hidden rounded-frame bg-surface after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_var(--color-hairline)]'

// Every project, a picture and its label, two by two (mockup/work.html). A project
// without a picture shows a sentence on the surface instead.
export function WorkGrid({
  lang,
  projects,
  label,
  openProject,
}: {
  lang: Locale
  projects: Project[]
  label: string
  openProject: string
}) {
  return (
    <section aria-label={label} className="wrap">
      <ul className="m-0 grid list-none grid-cols-2 gap-x-[clamp(1.25rem,3vw,2.5rem)] gap-y-[clamp(3rem,6vw,5rem)] p-0 pt-[clamp(1rem,3vw,2rem)] narrow:grid-cols-1">
        {projects.map((project, k) => (
          <li key={project.slug} className="rv-fade">
            <Link href={localePath(lang, `/projects/${project.slug}`)} className="project-link group">
              {'image' in project.tile ? (
                <div className={frame}>
                  <Screenshot
                    image={project.tile.image}
                    alt=""
                    sizes="(max-width: 48rem) 100vw, min(50vw, 45rem)"
                    eager={k < 2}
                    lens
                    className="size-full object-cover object-top [transition:transform_1.4s_var(--ease-soft),filter_0.45s_var(--ease-soft)]"
                  />
                </div>
              ) : (
                <div aria-hidden="true" className={`${frame} grid content-end p-[clamp(1.5rem,3vw,2.5rem)]`}>
                  <p className="m-0 max-w-[24ch] text-[clamp(1.25rem,2.1vw,1.875rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-ink">
                    {project.tile.text}
                  </p>
                </div>
              )}
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-8 gap-y-[0.35rem] px-[0.35rem] pt-[1.4rem] pb-[0.35rem] narrow:grid-cols-1">
                <h2 className="project-title relative m-0 mr-[1.05em] text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.025em] motion-safe:[transition:transform_0.6s_var(--ease-soft)] motion-safe:group-hover:[transform:translateX(1.05em)]">
                  {/* The title makes room for an arrow on hover. */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-[-1.05em] flex opacity-0 [transform:translate(-0.35em,-50%)] motion-safe:[transition:opacity_0.35s_var(--ease-soft),transform_0.6s_var(--ease-soft)] motion-safe:group-hover:opacity-100 motion-safe:group-hover:[transform:translate(0,-50%)]"
                  >
                    <Icon name="right" />
                  </span>
                  {project.name}
                </h2>
                {/* Kind and years share a line, a dot between them, when they fit. When they do
                    not, the years go under and the dot is clipped off the edge. */}
                <span className="overflow-clip text-right text-[0.9375rem] text-ink-muted narrow:row-start-2 narrow:text-left">
                  <span className="-mr-[1.1em] flex flex-wrap justify-end narrow:mr-0 narrow:-ml-[1.1em] narrow:justify-start">
                    <span className="after:inline-block after:w-[1.1em] after:text-center after:content-['·'] narrow:pl-[1.1em] narrow:after:content-none">
                      {project.kind}
                    </span>
                    <span className="pr-[1.1em] narrow:pr-0 narrow:before:inline-block narrow:before:w-[1.1em] narrow:before:text-center narrow:before:content-['·']">
                      {project.when}
                    </span>
                  </span>
                </span>
                <p className="col-span-full m-0 max-w-[60ch] text-ink-muted">{project.line}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Lens label={openProject} />
    </section>
  )
}
