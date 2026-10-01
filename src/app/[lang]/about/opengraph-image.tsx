import { getContent } from '@/content'
import { age, fill } from '@/dates'
import { type Locale, locales } from '@/i18n'
import { ogAlt, ogImage, ogSize } from '@/og'

export const alt = ogAlt
export const size = ogSize
export const contentType = 'image/png'
// The lede carries the age: regenerated daily, like the page.
export const revalidate = 86400

// Rendered at build time, once per language.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { about } = getContent((await params).lang as Locale)
  return ogImage({ title: about.title, line: fill(about.lede, { age: age() }) })
}
