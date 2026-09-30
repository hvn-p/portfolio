import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHead } from '@/components/blocks'
import { CaseSections, Facts } from '@/components/case-study'
import { Roll } from '@/components/roll'
import { link } from '@/components/styles'
import { Link } from '@/components/transition-link'
import { getContent } from '@/content'
import type { ProjectSlug } from '@/content/types'
import { type Locale, localePath } from '@/i18n'

type Props = PageProps<'/[lang]/projects/[slug]'>

export const dynamicParams = false

export function generateStaticParams(): { slug: ProjectSlug }[] {
  return [{ slug: 'estuaire' }, { slug: 'abacus' }]
}

async function load(params: Props['params']) {
  const { lang, slug } = await params
  const content = getContent(lang as Locale)
  const project = content.projects[slug as ProjectSlug]
  if (!project) notFound()
  return { lang: lang as Locale, content, project }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return (await load(params)).project.meta
}

export default async function ProjectPage({ params }: Props) {
  const { lang, content, project } = await load(params)
  const { site } = content
  const next = content.projects[project.next]

  return (
    // The bottom padding stands in for the mockup's margin above the footer.
    <main id="main" className="pt-(--bar-h) pb-20">
      <PageHead title={project.name} lede={project.lede}>
        <p className="mt-0 mb-6 text-[0.9375rem] text-ink-quiet">
          <Link href={localePath(lang, '/#work')} className={link.crumb}>
            {site.work}
          </Link>{' '}
          / {project.name}
        </p>
      </PageHead>
      <div className="wrap">
        <Facts facts={project.facts} />
      </div>
      <CaseSections sections={project.sections} />
      <div className="wrap">
        <Link
          href={localePath(lang, `/projects/${next.slug}`)}
          className="group mt-[clamp(5rem,11vw,9rem)] flex flex-wrap items-baseline justify-between gap-4 border-t border-hairline pt-6 no-underline"
        >
          <span className="text-[0.9375rem] text-ink-quiet">
            <Roll text={site.nextProject} />
          </span>
          <span className="relative m-0 pb-[0.08em] text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-right after:scale-x-0 after:bg-current group-hover:after:origin-left group-hover:after:scale-x-100 motion-safe:after:transition-transform motion-safe:after:duration-600 motion-safe:after:ease-soft">
            {next.name}
          </span>
        </Link>
      </div>
    </main>
  )
}
