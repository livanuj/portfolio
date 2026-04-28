import { expect, test } from "@playwright/test";

import { references } from "@/data/references";
import { skillCategories } from "@/data/techSkills";
import { experiences } from "@/data/timeline";

test.describe("bio page", () => {
  test("renders the bio section heading and navigation", async ({ page }) => {
    await page.goto("/bio");

    await expect(page.getByRole("heading", { level: 2, name: "About Me" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Intro" })).toBeVisible();
  });

  test("renders data-driven references, timeline, and tech skills sections", async ({ page }) => {
    await page.goto("/bio");

    await expect(page.getByRole("heading", { level: 2, name: "References" })).toBeVisible();
    for (const reference of references) {
      await expect(page.getByRole("heading", { level: 3, name: reference.name })).toBeVisible();
    }

    await expect(page.getByRole("heading", { level: 2, name: "Timeline" })).toBeVisible();
    for (const experience of experiences) {
      await expect(page.getByRole("heading", { level: 3, name: experience.company })).toBeVisible();
    }

    await expect(page.getByRole("heading", { level: 2, name: "Tech Skills" })).toBeVisible();
    for (const category of skillCategories) {
      await expect(
        page.getByRole("heading", { level: 3, name: category.title, exact: true }),
      ).toBeVisible();
    }
  });
});
