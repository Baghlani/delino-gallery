import { expect, test } from "@playwright/test";

test.describe("Photo Page", () => {
  const photoId = 1;

  test("should load the photo view page", async ({ page }) => {
    await page.goto(`/photos/${photoId}`);

    await page.waitForURL(`/photos/*`);

    await expect(page).toHaveURL(`/photos/${photoId}`);
    await expect(page.getByRole("heading", { level: 3 })).toHaveText(/details/i);
  });

  test("should display image", async ({ page }) => {
    await page.goto(`/photos/${photoId}`);
    const imageElement = page.getByTestId("photo-img");

    await expect(imageElement).toBeVisible();
    await expect(imageElement).toHaveAttribute("src");
  });

  test("should load the photo's album title", async ({ page }) => {
    const fakeAlbum = { id: 1, title: "Album #1" };
    await page.route("**/albums/**", (route) => {
      route.fulfill({ status: 200, body: JSON.stringify(fakeAlbum) });
    });

    await page.goto(`/photos/${photoId}`);
    const albumLink = page.getByTestId("photo-album-link");

    await expect(albumLink).toBeVisible();
    await expect(albumLink).toHaveText(fakeAlbum.title);
    await expect(albumLink).toHaveAttribute("href", `/albums/${fakeAlbum.id}`);
  });

  test("should have a back to album link", async ({ page }) => {
    await page.goto(`/photos/${photoId}`);
    const backButton = page.getByRole("link", { name: /back/i });

    await expect(backButton).toBeVisible();

    await backButton.click();

    await expect(page).toHaveURL("/albums/1");
  });
});
