export const MOCKUP_URL = 'http://127.0.0.1:8765'
// localhost, not 127.0.0.1: see the proxy pitfall in AGENTS.md.
export const APP_URL = 'http://localhost:3917'

// Each app route and the mockup page it must reproduce.
export const pages = [
  { name: 'home', mockup: '/index.html', app: '/' },
  { name: 'estuaire', mockup: '/projects/estuaire.html', app: '/projects/estuaire' },
  { name: 'abacus', mockup: '/projects/abacus.html', app: '/projects/abacus' },
  { name: 'about', mockup: '/about.html', app: '/about' },
] as const

// Elements that change with time rather than with scroll. They are masked in both
// captures and checked by eye instead.
export const timeDriven = ['.rotator']
