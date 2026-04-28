import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("renders the main profile content and primary navigation", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: "View Bio" })).toBeVisible();
    await expect(page.getByRole("link", { name: "See Work" })).toBeVisible();
    await expect(page.getByRole("link", { name: /GitHub/i })).toBeVisible();
  });
});
