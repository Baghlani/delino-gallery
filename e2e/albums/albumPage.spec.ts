import { expect, Page, test } from "@playwright/test";

test.describe("Album Page", () => {
  test("should load the album images page", async ({ page }) => {
    await page.goto(`/albums/1`);
    await expect(page).toHaveURL(`/albums/1`);
    expect(await page.locator("h1").textContent()).toMatch(new RegExp("Album #1"));
  });

  test("should display images for the album", async ({ page }) => {
    await page.goto(`/albums/1`);
    const photoGrid = await page.getByTestId("photo-grid");
    await expect(photoGrid).toBeVisible();
    await expect((await photoGrid.getByRole("img").all()).length).toBeGreaterThan(0);
  });

  test("should have links to image view pages", async ({ page }) => {
    await page.goto(`/albums/1`);
    const imageLinks = page.locator("a", { has: page.locator("img") });
    const count = await imageLinks.count();

    for (let i = 0; i < count; i++) {
      const href = await imageLinks.nth(i).getAttribute("href");
      const photoId = href?.split("/").pop();
      expect(href).toBe(`/photos/${photoId}`);
    }
  });

  test("should navigate to correct photo page when photo link is clicked", async ({
    page,
  }: {
    page: Page;
  }) => {
    await page.goto("/albums/1");
    const firstPhotoLink = page.locator("a", { has: page.locator("img") }).first();
    const photoId = await firstPhotoLink
      .getAttribute("href")
      .then((href) => href?.split("/").pop());
    const photoTitle = await firstPhotoLink
      .locator("[data-photo-title]")
      .getAttribute("data-photo-title");

    await firstPhotoLink.click();
    await page.waitForURL("/photos/*");

    expect(page.url()).toContain(`/photos/${photoId}`);
    expect(await page.locator("h1").textContent()).toMatch(new RegExp(photoTitle!));
  });
});
