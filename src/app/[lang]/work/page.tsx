import type { Metadata } from 'next'
import { PageHead } from '@/components/blocks'
import { WorkGrid } from '@/components/work-grid'
import { getContent } from '@/content'
import type { Locale } from '@/i18n'
import { pageMetadata } from '@/site'

type Props = PageProps<'/[lang]/work'>

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale
  return pageMetadata(lang, '/work', getContent(lang).work.meta)
}

export default async function WorkPage({ params }: Props) {
  const lang = (await params).lang as Locale
  const { site, work, projects } = getContent(lang)

  return (
    <main id="main" className="pt-(--bar-h)">
      <PageHead title={work.title} lede={work.lede} />
      <WorkGrid
        lang={lang}
        projects={Object.values(projects)}
        label={work.gridLabel}
        openProject={site.openProject}
      />
    </main>
  )
}
