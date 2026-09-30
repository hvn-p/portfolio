import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getContent } from '@/content'
import { hasLocale, locales } from '@/i18n'
import { bodoni, schibsted } from '../fonts'
import '../globals.css'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

// FIXME: fake. Kept out of search engines until launch.
export const metadata = { robots: { index: false, follow: false } }

// Runs before the first paint: the small-screen menu only replaces the links
// once a script can open it.
const flagScript = 'document.documentElement.classList.add("js")'

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const { site } = getContent(lang)

  return (
    <html lang={lang} className={`${schibsted.variable} ${bodoni.variable}`} suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: a constant, first-paint flag */}
        <script dangerouslySetInnerHTML={{ __html: flagScript }} />
      </head>
      <body id="top">
        <a
          id="skip"
          href="#main"
          className="absolute -top-16 left-4 z-20 rounded-[8px] bg-ink px-4 py-[0.6rem] text-ground focus:top-4"
        >
          {site.skip}
        </a>
        <SiteHeader lang={lang} t={site} />
        {children}
        <SiteFooter t={site} />
      </body>
    </html>
  )
}
