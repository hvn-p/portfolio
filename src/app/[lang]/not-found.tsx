import { lang } from 'next/root-params'
import { NotFoundPage } from '@/components/not-found-page'
import { getContent } from '@/content'
import { defaultLocale, hasLocale } from '@/i18n'

export default async function NotFound() {
  const value = await lang()
  const locale = hasLocale(value) ? value : defaultLocale
  return <NotFoundPage lang={locale} t={getContent(locale).site} />
}
