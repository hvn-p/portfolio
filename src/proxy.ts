import { type NextRequest, NextResponse } from 'next/server'
import { defaultLocale, hasLocale, LANG_COOKIE, type Locale } from './i18n'

// The language for an unprefixed address: the visitor's explicit choice first,
// then the browser's languages in order of preference, then English.
function preferred(request: NextRequest): Locale {
  const chosen = request.cookies.get(LANG_COOKIE)?.value
  if (chosen && hasLocale(chosen)) return chosen
  const ranked = (request.headers.get('accept-language') ?? '')
    .split(',')
    .map((part, i) => {
      const [tag = '', q] = part.trim().split(';q=')
      return { lang: tag.toLowerCase().split('-')[0] ?? '', q: q === undefined ? 1 : Number(q), i }
    })
    .filter((entry) => entry.lang && entry.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i)
  return ranked.map((entry) => entry.lang).find(hasLocale) ?? defaultLocale
}

// Every page lives under app/[lang]. English keeps unprefixed addresses, so its
// prefix is rewritten in and never shown; French and Spanish carry theirs.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1] ?? ''

  if (first === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }
  if (hasLocale(first)) return

  const lang = preferred(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${lang}${pathname === '/' ? '' : pathname}`
  const response = lang === defaultLocale ? NextResponse.rewrite(url) : NextResponse.redirect(url, 307)
  // The answer depends on who asks.
  response.headers.set('Vary', 'Accept-Language, Cookie')
  return response
}

export const config = {
  // Skip Next internals and anything that looks like a file.
  matcher: ['/((?!_next/|.*\\.[^/]+$).*)'],
}
