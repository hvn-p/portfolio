import localFont from 'next/font/local'

// The very files the mockup loads from Google Fonts (latin subset, OFL). Through
// next/font/google, Google hands the build another cut of Schibsted Grotesk,
// whose glyphs run about 2px wider over a line of the hero statement.
export const schibsted = localFont({
  src: './fonts/schibsted-grotesk-latin.woff2',
  weight: '400 900',
  style: 'normal',
  variable: '--font-schibsted',
})

// Only the current page in the mobile menu uses it: no preload on every page.
export const bodoni = localFont({
  src: './fonts/bodoni-moda-italic-latin.woff2',
  weight: '500',
  style: 'italic',
  variable: '--font-bodoni',
  preload: false,
})
