const { test, expect } = require('@playwright/test');

test.describe('Landing Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/index.html');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Claude Agents/);
  });

  test('navigation is visible', async ({ page }) => {
    await expect(page.locator('.nav')).toBeVisible();
    await expect(page.locator('.nav-logo')).toHaveText('claude-agents.ch');
  });

  test('hero section renders', async ({ page }) => {
    await expect(page.locator('.hero')).toBeVisible();
    await expect(page.locator('.hero-title')).toHaveText('Swiss AI Agents for Your KMU');
  });

  test('value props section has 3 cards', async ({ page }) => {
    const cards = page.locator('.value-card');
    await expect(cards).toHaveCount(3);
  });

  test('services section has 4 service cards', async ({ page }) => {
    const cards = page.locator('.service-card');
    await expect(cards).toHaveCount(4);
  });

  test('pricing section has 3 tiers', async ({ page }) => {
    const cards = page.locator('.pricing-card');
    await expect(cards).toHaveCount(3);
  });

  test('process section has 4 steps', async ({ page }) => {
    const steps = page.locator('.process-step');
    await expect(steps).toHaveCount(4);
  });

  test('compliance section has 4 badges', async ({ page }) => {
    const badges = page.locator('.compliance-badge');
    await expect(badges).toHaveCount(4);
  });

  test('CTA form is present', async ({ page }) => {
    await expect(page.locator('#demoForm')).toBeVisible();
    await expect(page.locator('#emailInput')).toBeVisible();
  });

  test('footer has correct copyright', async ({ page }) => {
    await expect(page.locator('.footer')).toContainText('2026');
  });
});
