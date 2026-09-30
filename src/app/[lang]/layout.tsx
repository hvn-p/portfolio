import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, locales } from '@/i18n'
import { bodoni, schibsted } from '../fonts'
import '../globals.css'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Pierre Hervelin · Full-stack developer, AI systems',
  description:
    'Full-stack developer who builds AI systems in production and builds software with AI. Selected work, based in Bilbao, working remotely.',
  // FIXME: fake. Kept out of search engines until launch.
  robots: { index: false, follow: false },
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html lang={lang} className={`${schibsted.variable} ${bodoni.variable}`}>
      <body>{children}</body>
    </html>
  )
}
