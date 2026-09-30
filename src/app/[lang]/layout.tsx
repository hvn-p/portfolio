import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Curtain } from '@/components/curtain'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getContent } from '@/content'
import { defaultLocale, hasLocale, locales } from '@/i18n'
import { indexable, siteUrl } from '@/site'
import { bodoni, schibsted } from '../fonts'
import '../globals.css'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // A preview stays out of search engines; the public site is indexed.
  robots: indexable ? undefined : { index: false, follow: false },
}

// Runs before the first paint. The small-screen menu only replaces the links once
// a script can open it. On the home page with motion allowed, the bar's wordmark
// waits for the hero name, and a first arrival from outside the site plays the
// intro: setting both here keeps the final state from flashing first.
const home = `^/(?:(?:${locales.filter((l) => l !== defaultLocale).join('|')})/?)?$`
const firstPaint = `var d=document.documentElement;d.classList.add("js");
if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&new RegExp(${JSON.stringify(home)}).test(location.pathname)){
d.classList.add("has-hero-name");var s=false;
try{s=!!document.referrer&&new URL(document.referrer).origin===location.origin}catch(e){}
if(!s){d.classList.add("intro");setTimeout(function(){d.classList.remove("intro")},2600)}}`

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const { site, projects } = getContent(lang)
  const labels = {
    home: site.homeName,
    work: site.nav.work,
    about: site.nav.about,
    projects: Object.fromEntries(Object.values(projects).map((p) => [p.slug, p.name])),
  }

  return (
    <html
      lang={lang}
      className={`${schibsted.variable} ${bodoni.variable}`}
      // Next then scrolls instantly on navigation, under the curtain.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: a constant, first-paint script */}
        <script dangerouslySetInnerHTML={{ __html: firstPaint }} />
      </head>
      <body id="top">
        <Curtain labels={labels}>
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
        </Curtain>
      </body>
    </html>
  )
}
