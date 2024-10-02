# Delino Gallery

This project is a simple Album System built using Next.js 14 in App Directory Mode. It includes Four main pages:

1. A page which contains the brand a slogan as index page.
2. A page that lists all albums.
3. A dynamic page that shows the photos from a specific album.
4. A detailed page for viewing a single photo.

## Features

- Server-side data fetching
- Caching and performance optimization
- Metadata generation to improve SEO
- Responsive design by using TailwindCSS
- Smooth navigation between albums and photos using Next.js built-in features like Suspense and Link component
- E2E tests with Playwright
- Using TypeScript for better code quality and maintainability
- Utilizes the SWR library for client-side data fetching to ensure that the data is always up to date and cached for future requests. (only in one place for demonstration purposes)

## Caching Strategy and Performance Optimizations

- **Server-Side Data Fetching**: All data fetching is done on the server side using React Server Components to improve SEO and performance.
- **Next.js Cache**: Utilizes Next.js built-in caching capabilities to cache data and pages where applicable. All main pages are configured with the `dynamic` property set to `'force-static'`, to ensure that the page is statically generated and cached on the first visit.
- **Revalidation**: Pages are revalidated every hour (`revalidate = 3600`) to ensure data freshness.
- **Optimized Images**: Utilizes the `next/image` component to optimize images for faster loading and better performance. This includes resizing, compressing, and converting images to modern formats like AVIF. The optimized images are cached on the first visit and reused for subsequent requests, ensuring efficient and quick image delivery.
- **Optimized Fonts**: Utilizes the `next/font` component to optimize fonts for faster loading and better performance.

## Installation

1. Install dependencies:
   ```sh
   npm install
   ```

## Running the Development Server

To start the development server, run:

```sh
npm run dev
```

The app will be available at `http://localhost:3000`.

## Building and Serving the Standalone Build

### Using Docker

1. Uncommnet this line in next.config.mjs

```js
// output: "standalone",
```

2. Build the Docker image:

   ```sh
   docker build -t delino-gallery .
   ```

3. Run the Docker container:
   ```sh
   docker run -p 3000:3000 delino-gallery
   ```

### Using Build Script

You can run this project on every platform that supports Node.js. To achieve this use the following commands:

1. Build the project:

   ```sh
   npm run build
   ```

2. Start the server:
   ```sh
   npm start
   ```

## Testing

This project uses Playwright for E2E testing. To run the tests, use the following command. it runs in headless mode by default:

```sh
npm run test
```


To run the tests in headed mode, use the following command:

```sh
npm run test:headed
```


To run the tests in debug mode, use the following command:

```sh
npm run test:debug
```

### Notes

- I am aware of Next.js experimental test mode for API testing and mocking by @mswjs, but since it's not stable yet and the project is simple, I decided to use a simple approach with Playwright.
