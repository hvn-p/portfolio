// French and Spanish join once their copy exists.
export const locales = ['en'] as const
export type Locale = (typeof locales)[number]

// Served without a prefix: /about is English, /fr/about French.
export const defaultLocale: Locale = 'en'

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)
