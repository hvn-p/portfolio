import { getContent } from '@/content'
import type { ProjectSlug } from '@/content/types'
import { defaultLocale, type Locale, locales } from '@/i18n'
import { ogAlt, ogImage, ogSize } from '@/og'

export const alt = ogAlt
export const size = ogSize
export const contentType = 'image/png'

// The screenshot that opens each project's scene or tile, as a file for the renderer.
// A project without a picture is told by its title and line alone.
const firstShot: Partial<Record<ProjectSlug, string>> = {
  fruggr: 'fruggr/scene-ai-efficiency.webp',
  carbonscore: 'carbonscore/scene.webp',
  abacus: 'abacus/overview.webp',
  estuaire: 'estuaire/home.webp',
}

// Rendered at build time, once per language and project.
export function generateStaticParams() {
  const slugs = Object.keys(getContent(defaultLocale).projects)
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const project = getContent(lang as Locale).projects[slug as ProjectSlug]
  return ogImage({
    title: project.name,
    line: `${project.kind} · ${project.when}`,
    screenshot: firstShot[project.slug],
  })
}
