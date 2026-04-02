import { test, expect } from '@playwright/test'

/**
 * Clara's Bridge Template Smoke Tests
 *
 * This repo renders:
 * - Main content sections (Purpose, Services, etc.)
 * - Footer
 */

test.describe("Clara's Bridge template", () => {
  test('should render the Our Purpose section', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Our Purpose' })).toBeVisible()
  })

  test('should render the Footer', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Quick Links' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
  })
})
