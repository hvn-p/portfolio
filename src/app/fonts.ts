import { Bodoni_Moda, Schibsted_Grotesk } from 'next/font/google'

export const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
})

// Only the current page in the mobile menu uses it: no preload on every page.
export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  style: 'italic',
  axes: ['opsz'],
  variable: '--font-bodoni',
  preload: false,
})
