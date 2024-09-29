import { expect, Page, test } from "@playwright/test";

test.describe("Album List Page", () => {
  test("should display a list of albums", async ({ page }: { page: Page }) => {
    await page.goto("/albums");
    const albumTitles = await page.locator("h2").allTextContents();
    expect(albumTitles.length).toBeGreaterThan(0);
  });

  test("should navigate to correct album page when album link is clicked", async ({
    page,
  }: {
    page: Page;
  }) => {
    await page.goto("/albums");
    const firstAlbumLink = page.locator("a", { hasText: "Album" }).first();
    const albumId = await firstAlbumLink
      .getAttribute("href")
      .then((href) => href?.split("/").pop());
    const albumTitle = await firstAlbumLink.locator("h2").textContent();

    await firstAlbumLink.click();
    await page.waitForURL("/albums/*");

    expect(page.url()).toContain(`/albums/${albumId}`);
    expect(await page.locator("h1").textContent()).toMatch(new RegExp(albumTitle!));
  });
});
