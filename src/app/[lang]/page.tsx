import type { Metadata } from 'next'
import Link from 'next/link'
import { Capabilities, Contact, Split, splitText } from '@/components/blocks'
import { Hero, Scenes } from '@/components/home'
import { Icon } from '@/components/icons'
import { link } from '@/components/styles'
import { getContent } from '@/content'
import { type Locale, localePath } from '@/i18n'

type Props = PageProps<'/[lang]'>

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { home } = getContent((await params).lang as Locale)
  return home.meta
}

export default async function Home({ params }: Props) {
  const lang = (await params).lang as Locale
  const { site, home, projects } = getContent(lang)

  return (
    <main id="main" className="pt-(--bar-h)">
      <Hero t={home} site={site} />
      <Scenes lang={lang} t={home} site={site} projects={Object.values(projects)} />
      <Split id="about-title" title={home.about.title}>
        <p className={splitText}>{home.about.text}</p>
        <Link href={localePath(lang, '/about')} className={link.text}>
          {home.about.link} <Icon name="right" />
        </Link>
        <Capabilities items={home.about.capabilities} />
      </Split>
      <Contact t={site} />
    </main>
  )
}
