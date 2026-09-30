import type { Locale } from '@/i18n'
import { en } from './en'
import type { Content } from './types'

const content: Record<Locale, Content> = { en }

export const getContent = (lang: Locale) => content[lang]
