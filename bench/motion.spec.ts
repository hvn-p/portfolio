import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { type BrowserContext, expect, type Page, test } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'
import { APP_URL, hideWater, MOCKUP_URL } from './pages'

// Time-driven motion, which compare.spec.ts cannot see: every running animation is
// frozen at the same instant on both sides, then the two screens are compared.

const MAX_DIFF = 0.001
const NOW = new Date('2026-01-15T09:30:00Z')

const freeze = (page: Page, t: number) =>
  page.evaluate((at) => {
    for (const a of document.getAnimations()) {
      a.pause()
      a.currentTime = at
    }
  }, t)
const frames = (page: Page) =>
  page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))))
const clickLink = (page: Page, where: string, text: string) =>
  page
    .locator(`${where} a`, { hasText: text })
    .first()
    .evaluate((a: HTMLAnchorElement) => a.click())

type Side = 'mockup' | 'app'
type Case = {
  name: string
  page: Record<Side, string>
  install?: boolean
  run: (page: Page, side: Side) => AsyncGenerator<string | number>
}

const cases: Case[] = [
  {
    name: 'intro',
    page: { mockup: '/index.html', app: '/' },
    install: true,
    async *run(page) {
      await page.evaluate(() => document.fonts.ready)
      await page.waitForTimeout(400)
      for (const t of [100, 400, 800, 1200, 1600, 2400]) {
        await freeze(page, t)
        yield t
      }
    },
  },
  {
    name: 'rotator',
    page: { mockup: '/index.html', app: '/' },
    install: true,
    async *run(page) {
      await page.evaluate(() => document.fonts.ready)
      await page.waitForTimeout(800)
      await page.clock.runFor(3000)
      await frames(page)
      for (const t of [0, 200, 450, 800]) {
        await freeze(page, t)
        yield t
      }
    },
  },
  {
    name: 'button',
    page: { mockup: '/about.html', app: '/about' },
    async *run(page) {
      await page.waitForTimeout(800)
      const button = page.locator('main a', { hasText: 'Get in touch' }).first()
      await button.scrollIntoViewIfNeeded()
      await page.waitForTimeout(700)
      const box = await button.boundingBox()
      if (!box) throw new Error('no button')
      await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.3)
      await page.waitForTimeout(40)
      for (const t of [100, 250, 500]) {
        await freeze(page, t)
        yield t
      }
    },
  },
  {
    name: 'link',
    page: { mockup: '/index.html', app: '/' },
    async *run(page) {
      await page.waitForTimeout(800)
      await page.evaluate(() => window.scrollTo({ top: 99999, behavior: 'instant' }))
      await frames(page)
      await page.locator('footer a', { hasText: 'Back to top' }).hover()
      await page.waitForTimeout(30)
      for (const t of [120, 300]) {
        await freeze(page, t)
        yield t
      }
    },
  },
  {
    name: 'lens',
    page: { mockup: '/index.html', app: '/' },
    async *run(page) {
      await page.waitForTimeout(800)
      await page.evaluate(() => window.scrollTo({ top: 2250, behavior: 'instant' }))
      await frames(page)
      await page.mouse.move(700, 400)
      await page.mouse.move(720, 420)
      await page.waitForTimeout(1500)
      await freeze(page, 0)
      yield 'still'
    },
  },
  {
    name: 'curtain-cover',
    page: { mockup: '/index.html', app: '/' },
    async *run(page) {
      await page.waitForTimeout(1500)
      await clickLink(page, 'header', 'About')
      await page.waitForSelector('.curtain.is-covering')
      for (const t of [150, 350, 600]) {
        await freeze(page, t)
        yield t
      }
    },
  },
  {
    name: 'curtain-lift',
    page: { mockup: '/index.html', app: '/' },
    async *run(page, side) {
      await page.waitForTimeout(1500)
      if (side === 'mockup') {
        // The mockup lifts on the next document: arrive as its click handler leaves it.
        await page.evaluate(() => sessionStorage.setItem('curtain', 'About'))
        await page.goto(`${MOCKUP_URL}/about.html`)
      } else {
        await clickLink(page, 'header', 'About')
      }
      await page.waitForSelector('.curtain.is-lifting', { timeout: 5000 })
      for (const t of [100, 300, 500]) {
        await freeze(page, t)
        yield t
      }
    },
  },
]

async function capture(context: BrowserContext, c: Case, side: Side) {
  const page = await context.newPage()
  if (c.install) await page.clock.install({ time: NOW })
  else await page.clock.setFixedTime(NOW)
  await page.goto((side === 'mockup' ? MOCKUP_URL : APP_URL) + c.page[side])
  await hideWater(page)
  const shots = new Map<string, Buffer>()
  for await (const at of c.run(page, side)) shots.set(String(at), await page.screenshot())
  await page.close()
  return shots
}

for (const c of cases) {
  test(`motion ${c.name}`, async ({ browser }, testInfo) => {
    const { viewport, reducedMotion } = testInfo.project.use
    test.skip(reducedMotion === 'reduce' || (viewport?.width ?? 0) < 1000, 'desktop with motion only')
    const context = await browser.newContext({ viewport })
    const mockup = await capture(context, c, 'mockup')
    const app = await capture(context, c, 'app')
    await context.close()

    const out = path.join(import.meta.dirname, 'output', testInfo.project.name, `motion-${c.name}`)
    for (const [at, left] of mockup) {
      const right = app.get(at)
      if (!right) throw new Error(`no app capture at ${at}`)
      const a = PNG.sync.read(left)
      const b = PNG.sync.read(right)
      const diff = new PNG({ width: a.width, height: a.height })
      const ratio =
        pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 }) / (a.width * a.height)
      if (ratio > MAX_DIFF) {
        await mkdir(out, { recursive: true })
        await writeFile(path.join(out, `${at}-diff.png`), PNG.sync.write(diff))
        await writeFile(path.join(out, `${at}-mockup.png`), left)
        await writeFile(path.join(out, `${at}-app.png`), right)
      }
      expect.soft(ratio, `share of differing pixels at ${at}`).toBeLessThanOrEqual(MAX_DIFF)
    }
  })
}
