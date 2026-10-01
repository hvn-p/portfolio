import type { Metadata } from 'next'
import { Curtain } from '@/components/curtain'
import { NotFoundPage } from '@/components/not-found-page'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getContent } from '@/content'
import { defaultLocale } from '@/i18n'
import { bodoni, schibsted } from './fonts'
import './globals.css'

// Addresses outside every language, such as a missing file: the English 404,
// dressed as the rest of the site.
const { site } = getContent(defaultLocale)

export const metadata: Metadata = {
  title: `${site.notFound.title} · Pierre Hervelin`,
  robots: { index: false, follow: false },
}

export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale} className={`${schibsted.variable} ${bodoni.variable}`}>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: a constant, first-paint flag */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body id="top">
        <Curtain labels={{ home: site.homeName, work: site.nav.work, about: site.nav.about, projects: {} }}>
          <SiteHeader lang={defaultLocale} t={site} />
          <NotFoundPage lang={defaultLocale} t={site} />
          <SiteFooter t={site} />
        </Curtain>
      </body>
    </html>
  )
}
