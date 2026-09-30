import type { Locale } from '@/i18n'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import type { Content } from './types'

const content: Record<Locale, Content> = { en, fr, es }

export const getContent = (lang: Locale) => content[lang]
