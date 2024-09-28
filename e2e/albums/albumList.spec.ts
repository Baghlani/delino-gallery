import { expect, Page, test } from "@playwright/test";

test.describe("Album List Page", () => {
  test("should display a list of albums", async ({ page }: { page: Page }) => {
    await page.goto("/albums");
    const albumTitles = await page.locator("h2").allTextContents();
    expect(albumTitles.length).toBeGreaterThan(0);
  });

  test("should navigate to album images page on album click", async ({ page }: { page: Page }) => {
    await page.goto("/albums");
    const firstAlbumLink = await page.locator("a", { hasText: "Album" }).first();

    await firstAlbumLink.click();
    const albumId = await firstAlbumLink
      .getAttribute("href")
      .then((href) => href?.split("/").pop());
    await page.waitForURL("/albums/*");
    
    expect(page.url()).toContain(`/albums/${albumId}`);
  });
});
