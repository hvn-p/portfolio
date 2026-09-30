import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { APP_URL, pages } from './pages'

// WCAG 2.2 AA and axe's best practices, on every page the app serves, in every language.
for (const lang of ['en', 'fr', 'es']) {
  for (const target of pages) {
    const path = lang === 'en' ? target.app : `/${lang}${target.app === '/' ? '' : target.app}`
    test(`a11y ${lang} ${target.name}`, async ({ page }) => {
      const response = await page.goto(APP_URL + path)
      test.skip(response?.status() === 404, 'not ported yet')
      // Contrast is measured on the settled page, not halfway through the intro's fades.
      await page.waitForFunction(() => !document.documentElement.classList.contains('intro'))
      const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
        .analyze()
      expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual(
        [],
      )
    })
  }
}
