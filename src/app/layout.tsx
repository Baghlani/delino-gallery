import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Delino Gallery",
  description: "Delino Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        p-[var(--layout-padding-mobile)] md:p-[var(--layout-padding)]
        font-[family-name:var(--font-geist-sans)]`}
        style={{
          background: "radial-gradient(rgba(90, 69, 255, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #0E0F24",
        }}
      >
        {children}
      </body>
    </html>
  );
}
