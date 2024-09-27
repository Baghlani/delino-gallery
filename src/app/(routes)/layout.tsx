import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
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
      >
        <main className="h-full">
          <div className="-z-10 fixed top-0 left-0 w-full h-dvh background" />
          {children}
        </main>
      </body>
    </html>
  );
}
