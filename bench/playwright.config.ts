import { defineConfig } from '@playwright/test'
import { APP_URL, MOCKUP_URL } from './pages'

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
}
const motions = { motion: 'no-preference', reduced: 'reduce' } as const
const browsers = ['chromium', 'firefox'] as const

export default defineConfig({
  testDir: '.',
  outputDir: '../test-results',
  timeout: 5 * 60_000,
  fullyParallel: true,
  // Four browsers at once starve Chromium's raster: rescaled screenshots come out
  // blurred on whichever side lagged. Two keep every run stable.
  workers: 2,
  reporter: [['list'], ['html', { outputFolder: '../playwright-report', open: 'never' }]],
  projects: browsers.flatMap((browserName) =>
    Object.entries(viewports).flatMap(([size, viewport]) =>
      Object.entries(motions).map(([motion, reducedMotion]) => ({
        name: `${browserName}-${size}-${motion}`,
        use: { browserName, viewport, reducedMotion },
      })),
    ),
  ),
  webServer: [
    {
      command: 'python3 -m http.server 8765 --bind 127.0.0.1 --directory mockup',
      cwd: '..',
      url: `${MOCKUP_URL}/index.html`,
      // The mockup is the same in every worktree, so any running copy will do.
      reuseExistingServer: true,
    },
    {
      // The binary itself: through nr, the server lands outside the process group
      // Playwright stops, and the run never ends. BENCH=1 serves the mockup's own
      // screenshots instead of optimized ones, so what differs is layout and motion.
      command:
        'BENCH=1 node_modules/.bin/next build && node_modules/.bin/next start --hostname localhost --port 3917',
      cwd: '..',
      url: APP_URL,
      timeout: 3 * 60_000,
      // Never reuse: a server left running by another worktree would be compared
      // in place of this one.
      reuseExistingServer: false,
    },
  ],
})
