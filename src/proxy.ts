import { type NextRequest, NextResponse } from 'next/server'
import { defaultLocale, hasLocale } from './i18n'

// Every page lives under app/[lang]. The default language keeps unprefixed URLs,
// so its prefix is rewritten in and never shown.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1] ?? ''

  if (first === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }
  if (hasLocale(first)) return

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals and anything that looks like a file.
  matcher: ['/((?!_next/|.*\\.[^/]+$).*)'],
}
