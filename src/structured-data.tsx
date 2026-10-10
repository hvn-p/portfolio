import { getContent } from './content'
import { links } from './content/links'
import { type Locale, localePath, locales } from './i18n'
import { siteUrl } from './site'

// Schema.org data for search engines: who the site belongs to, and the profiles
// elsewhere that are the same person. One @id per entity, the same in every language.
const url = (path: string) => new URL(path, siteUrl).toString()
const personId = url('/#person')
const websiteId = url('/#website')

function person(lang: Locale) {
  const { site, home } = getContent(lang)
  return {
    '@type': 'Person',
    '@id': personId,
    name: 'Pierre Hervelin',
    url: url('/'),
    jobTitle: site.jobTitle,
    description: home.meta.description,
    email: links.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Bilbao', addressCountry: 'ES' },
    sameAs: [links.linkedin, links.github, links.githubPersonal, links.modrinth, links.curseforge],
  }
}

// The home page: the site, and the person it belongs to.
export function homeLd(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: url('/'),
        name: 'Pierre Hervelin',
        inLanguage: [...locales],
        publisher: { '@id': personId },
      },
      person(lang),
    ],
  }
}

// The About page, a profile page about the person.
export function aboutLd(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: url(localePath(lang, '/about')),
    inLanguage: lang,
    isPartOf: { '@id': websiteId },
    mainEntity: person(lang),
  }
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: serialized data, '<' escaped
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
