import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBeLessThan(400);
    await page.waitForLoadState("domcontentloaded");
  });

  test("should have a navigation component", async ({ page }) => {
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible({ timeout: 10000 });
  });

  test("should have any links in nav", async ({ page }) => {
    const nav = page.locator("nav").first();
    const links = nav.locator("a, button");
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });
});