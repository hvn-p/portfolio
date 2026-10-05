import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { expect, type Page, test } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { APP_URL, hideWater, MOCKUP_URL, pages, timeDriven } from './pages'

// Share of differing pixels tolerated in one capture.
const MAX_DIFF = 0.001
// Any fixed instant, so the Bilbao clock reads the same on both sides.
const NOW = new Date('2026-01-15T09:30:00Z')

async function open(page: Page, url: string) {
  const response = await page.goto(url, { waitUntil: 'load' })
  await hideWater(page)
  await page.evaluate(() => document.fonts.ready)
  // Let the hero intro play out (2.6 s in site.js).
  await page.waitForTimeout(3000)
  return response
}

async function scrollTo(page: Page, y: number) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y)
  await page.evaluate(async () => {
    const pending = [...document.images].filter((img) => {
      const r = img.getBoundingClientRect()
      return !img.complete && r.bottom > 0 && r.top < innerHeight
    })
    const timeout = new Promise((resolve) => setTimeout(resolve, 5000))
    await Promise.race([Promise.all(pending.map((img) => img.decode().catch(() => {}))), timeout])
    // Two frames, so the scroll-driven styles of site.js have run.
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  })
}

const capture = (page: Page) =>
  page.screenshot({ animations: 'disabled', caret: 'hide', mask: timeDriven.map((s) => page.locator(s)) })

function compare(a: Buffer, b: Buffer) {
  const left = PNG.sync.read(a)
  const right = PNG.sync.read(b)
  const { width, height } = left
  const out = new PNG({ width, height })
  const changed = pixelmatch(left.data, right.data, out.data, width, height, { threshold: 0.1 })
  return { ratio: changed / (width * height), diff: PNG.sync.write(out) }
}

for (const target of pages) {
  test(target.name, async ({ context }, testInfo) => {
    await context.clock.setFixedTime(NOW)
    const mockup = await context.newPage()
    const app = await context.newPage()
    await open(mockup, MOCKUP_URL + target.mockup)
    const response = await open(app, APP_URL + target.app)
    test.skip(response?.status() === 404, 'not ported yet')

    const docHeight = (page: Page) => page.evaluate(() => document.documentElement.scrollHeight)
    const height = await docHeight(mockup)
    expect.soft(await docHeight(app), 'page height').toBe(height)

    // Reduced motion is static: one capture per screen. With motion, half a screen,
    // to catch the pinned scenes at several points of their progress.
    const vh = testInfo.project.use.viewport?.height ?? 900
    const step = testInfo.project.use.reducedMotion === 'reduce' ? vh : vh / 2
    const last = Math.max(0, height - vh)
    const positions = [...Array(Math.ceil(last / step)).keys()].map((k) => k * step).concat(last)

    const out = path.join(import.meta.dirname, 'output', testInfo.project.name, target.name)
    await rm(out, { recursive: true, force: true })

    for (const y of positions) {
      await scrollTo(mockup, y)
      await scrollTo(app, y)
      const { ratio, diff } = compare(await capture(mockup), await capture(app))
      if (ratio > MAX_DIFF) {
        await mkdir(out, { recursive: true })
        await writeFile(path.join(out, `${y}-diff.png`), diff)
        await writeFile(path.join(out, `${y}-mockup.png`), await capture(mockup))
        await writeFile(path.join(out, `${y}-app.png`), await capture(app))
        await testInfo.attach(`${y}px diff`, { body: diff, contentType: 'image/png' })
      }
      expect.soft(ratio, `share of differing pixels at ${y}px`).toBeLessThanOrEqual(MAX_DIFF)
    }
  })
}
