// French and Spanish join once their copy exists.
export const locales = ['en'] as const
export type Locale = (typeof locales)[number]

// Served without a prefix: /about is English, /fr/about French.
export const defaultLocale: Locale = 'en'

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)

// A site path in the given language: '/about', '/#work', '/'.
export function localePath(lang: Locale, path: string) {
  if (lang === defaultLocale) return path
  return path === '/' || path.startsWith('/#') ? `/${lang}${path.slice(1)}` : `/${lang}${path}`
}

// The part of the site a pathname belongs to, whatever its language.
export function sectionOf(pathname: string): 'home' | 'work' | 'about' | null {
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] && hasLocale(parts[0])) parts.shift()
  if (parts.length === 0) return 'home'
  if (parts[0] === 'projects') return 'work'
  if (parts[0] === 'about') return 'about'
  return null
}
