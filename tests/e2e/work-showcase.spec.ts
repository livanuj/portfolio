import { expect, test, type Page } from "@playwright/test";

import { leavelogicData } from "@/data/projectShowcases/leavelogic";
import { smartflowData } from "@/data/projectShowcases/smartflow";

const expectShowcasePage = async (page: Page, data: typeof smartflowData) => {
  await expect(page.getByRole("heading", { level: 1, name: data.title })).toBeVisible();
  await expect(page.getByRole("link", { name: "All Projects" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Overview" })).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Key Features & Contributions" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Technologies Used" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Key Achievements" })).toBeVisible();

  await expect(page.getByText(data.company, { exact: true })).toBeVisible();
  await expect(page.getByText(data.role, { exact: true })).toBeVisible();
  await expect(page.getByText(data.period, { exact: true })).toBeVisible();
  await expect(page.getByText(data.type, { exact: true })).toBeVisible();

  const firstFeature = data.features[0];
  await expect(page.getByRole("heading", { level: 3, name: firstFeature.title })).toBeVisible();

  await expect(page.getByText(data.technologies[0], { exact: true })).toBeVisible();
  await expect(page.getByText(data.achievements[0], { exact: true })).toBeVisible();
};

test.describe("work showcase pages", () => {
  test("renders the SmartFlows showcase content", async ({ page }) => {
    await page.goto("/work/smartflow");

    await expectShowcasePage(page, smartflowData);
  });

  test("renders the LeaveLogic showcase content", async ({ page }) => {
    await page.goto("/work/leavelogic");

    await expectShowcasePage(page, leavelogicData);
  });
});
