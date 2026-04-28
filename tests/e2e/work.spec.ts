import { expect, test } from "@playwright/test";

import { portfolioData } from "@/data/projects";

test.describe("work page", () => {
  test("renders the work section heading and navigation", async ({ page }) => {
    await page.goto("/work");

    await expect(page.getByRole("heading", { level: 2, name: "Professional" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Professional" })).toBeVisible();
  });

  test("renders data-driven project cards for each work category", async ({ page }) => {
    await page.goto("/work");

    await expect(page.getByRole("heading", { level: 2, name: "Professional" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Freelance" })).toBeVisible();

    for (const project of portfolioData.professional) {
      await expect(
        page.getByRole("heading", { level: 3, name: project.title, exact: true }),
      ).toBeVisible();
    }

    for (const project of portfolioData.freelance) {
      await expect(
        page.getByRole("heading", { level: 3, name: project.title, exact: true }),
      ).toBeVisible();
    }
  });
});
