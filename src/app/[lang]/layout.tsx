import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Curtain } from '@/components/curtain'
import { Reticle } from '@/components/reticle'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SmoothScroll } from '@/components/smooth-scroll'
import { getContent } from '@/content'
import { defaultLocale, hasLocale, locales } from '@/i18n'
import { indexable, siteUrl, umami } from '@/site'
import { schibsted } from '../fonts'
import '../globals.css'

export const dynamicParams = false

// Regenerated daily: the footer's year and the age on About come from today's date.
export const revalidate = 86400

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // A preview stays out of search engines; the public site is indexed.
  robots: indexable ? undefined : { index: false, follow: false },
}

// Runs before the first paint. The small-screen menu only replaces the links once
// a script can open it. On the home page with motion allowed, the bar's monogram
// waits for the hero name, and a first arrival from outside the site plays the
// intro: setting both here keeps the final state from flashing first.
// data-fit sorts the screen height for the hero (globals.css), measured on arrival
// and again only when the width changes, as on turning the phone: a toolbar that
// folds away while scrolling must not reflow the hero. On a touch screen, --vh and
// --svh hold 1vh and 1svh from the same measure, for the layout to read in place of
// the units: some browsers (Brave on iOS) resize the page as their toolbars fold, and
// every viewport unit follows. With a mouse, the units stay live and follow the window.
const home = `^/(?:(?:${locales.filter((l) => l !== defaultLocale).join('|')})/?)?$`
const firstPaint = `var d=document.documentElement;d.classList.add("js");
var touch=matchMedia("(pointer: coarse)").matches;
var w=0,fit=function(){if(d.clientWidth===w)return;w=d.clientWidth;var h=d.clientHeight;d.dataset.fit=h<620?"short shorter":h<736?"short":"";
if(!touch)return;var p=document.createElement("div");p.style.cssText="position:absolute;height:100vh";d.appendChild(p);
d.style.setProperty("--vh",p.getBoundingClientRect().height/100+"px");d.style.setProperty("--svh",h/100+"px");p.remove()};
fit();addEventListener("resize",fit);
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
      className={schibsted.variable}
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
        <SmoothScroll />
        <Reticle />
        {umami && (
          <Script
            src={umami.src}
            data-website-id={umami.websiteId}
            data-domains={umami.domain}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
