import type { Metadata } from 'next'
import {
  Capabilities,
  Contact,
  Elsewhere,
  PageHead,
  Rows,
  SectionHead,
  Split,
  splitText,
} from '@/components/blocks'
import { Experience } from '@/components/experience'
import { getContent } from '@/content'
import { age, fill } from '@/dates'
import type { Locale } from '@/i18n'
import { pageMetadata } from '@/site'

type Props = PageProps<'/[lang]/about'>

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale
  return pageMetadata(lang, '/about', getContent(lang).about.meta)
}

export default async function AboutPage({ params }: Props) {
  const { site, about } = getContent((await params).lang as Locale)

  return (
    <main id="main" className="pt-(--bar-h)">
      <PageHead title={about.title} lede={fill(about.lede, { age: age() })} />
      <section aria-labelledby="skills-title" className="wrap pt-4">
        <SectionHead id="skills-title" title={about.skills.title} />
        <Capabilities items={about.skills.capabilities} flush />
      </section>
      <section aria-labelledby="exp-title" className="wrap pt-[clamp(4rem,9vw,7rem)]">
        <SectionHead id="exp-title" title={about.experience.title} count={about.experience.since} />
        <Experience roles={about.experience.roles} label={about.experience.indexLabel} />
      </section>
      <Split id="side-title" title={about.side.title}>
        <p className={splitText}>{about.side.text}</p>
        <Elsewhere items={about.side.links} className="rv-fade mb-10" />
        <Rows rows={about.side.rows} />
      </Split>
      <Split id="edu-title" title={about.education.title}>
        <Rows rows={about.education.rows} />
      </Split>
      <Contact t={site} />
    </main>
  )
}
