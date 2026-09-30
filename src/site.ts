import type { Metadata } from 'next'
import { defaultLocale, type Locale, localePath, locales } from './i18n'

// The public address, set where the site is served from. Without it the site is a
// preview: absolute links point to localhost and search engines are kept out.
// `||`, not `??`: an unset Docker build argument arrives as an empty string.
export const siteUrl = process.env.SITE_URL || 'http://localhost:3000'
export const indexable = Boolean(process.env.SITE_URL)

// Visit statistics, self-hosted Umami: on only when both are set at build time,
// and only counting visits on the public address, never a preview's.
export const umami =
  process.env.NEXT_PUBLIC_UMAMI_SRC && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
    ? {
        src: process.env.NEXT_PUBLIC_UMAMI_SRC,
        websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
        domain: new URL(siteUrl).hostname,
      }
    : null

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
