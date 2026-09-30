import type { Metadata } from 'next'
import { defaultLocale, type Locale, localePath, locales } from './i18n'

// The public address, set where the site is served from. Without it the site is a
// preview: absolute links point to localhost and search engines are kept out.
export const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000'
export const indexable = Boolean(process.env.SITE_URL)

const ogLocale: Record<Locale, string> = { en: 'en_GB', fr: 'fr_FR', es: 'es_ES' }

// Metadata for a page reachable at `path` in every language: its address, the
// same page in the other languages, and how it shows once shared.
export function pageMetadata(
  lang: Locale,
  path: string,
  meta: { title: string; description: string },
): Metadata {
  const url = localePath(lang, path)
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
        'x-default': localePath(defaultLocale, path),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: 'Pierre Hervelin',
      locale: ogLocale[lang],
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
  }
}
