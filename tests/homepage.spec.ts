import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBeLessThan(400);
    await page.waitForLoadState("domcontentloaded");
  });

  test("should load without crash", async ({ page }) => {
    const url = page.url();
    expect(url).toMatch(/\/(?:$|\?)/);
  });

  test("should display main heading", async ({ page }) => {
    const heading = page.locator("main h1, h1");
    await expect(heading).toBeVisible({ timeout: 15000 });
  });

  test("should have no critical console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);
    const criticalErrors = errors.filter(
      (e) => !e.includes("404") && !e.includes("favicon")
    );
    expect(criticalErrors).toHaveLength(0);
  });
});