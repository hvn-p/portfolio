import { getContent } from '@/content'
import type { ProjectSlug } from '@/content/types'
import { type Locale, locales } from '@/i18n'
import { ogAlt, ogImage, ogSize } from '@/og'

export const alt = ogAlt
export const size = ogSize
export const contentType = 'image/png'

// The screenshot that opens each project's scene, as a file for the renderer.
const firstShot: Record<ProjectSlug, string> = {
  estuaire: 'estuaire/home.webp',
  abacus: 'abacus/overview.webp',
}

// Rendered at build time, once per language and project.
export function generateStaticParams() {
  return locales.flatMap((lang) => Object.keys(firstShot).map((slug) => ({ lang, slug })))
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const project = getContent(lang as Locale).projects[slug as ProjectSlug]
  return ogImage({
    title: project.name,
    line: `${project.scene.kind}, ${project.scene.year}`,
    screenshot: firstShot[project.slug],
  })
}
