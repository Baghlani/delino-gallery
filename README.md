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
- Responsive design
- Smooth navigation between albums and images using Next.js like loading files and Link component
- Optimized images using next/image component
- E2E tests with Playwright

## Caching Strategy and Performance Optimizations

- **Server-Side Data Fetching**: All data fetching is done on the server side to improve SEO and performance.
- **Next.js Cache**: Utilizes Next.js built-in caching capabilities to cache data and pages where applicable.
- **Revalidation**: Pages are revalidated every hour (`revalidate = 3600`) to ensure data freshness.

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

1. Build the Docker image:

   ```sh
   docker build -t delino-gallery .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 3000:3000 delino-gallery
   ```

### Using Build Script

1. Build the project:

   ```sh
   npm run build
   ```

2. Start the server:
   ```sh
   npm start
   ```
