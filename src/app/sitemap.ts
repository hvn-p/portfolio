import type { MetadataRoute } from 'next'
import { getContent } from '@/content'
import { defaultLocale, localePath, locales } from '@/i18n'
import { siteUrl } from '@/site'

// Every page in every language, each entry pointing to its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = Object.keys(getContent(defaultLocale).projects)
  const paths = ['/', '/about', ...slugs.map((slug) => `/projects/${slug}`)]
  const url = (path: string) => new URL(path, siteUrl).toString()
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: url(localePath(lang, path)),
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, url(localePath(l, path))])) },
    })),
  )
}
