import type { Metadata } from "next";
import "./globals.css";

import { dmSans, spaceGrotesk, spaceMono } from "@/components/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://immjs.dev"),
  title: "immjs.dev",
  description: "A website made by Juliette, a french teenage developer!",
  openGraph: {
    images: "/metadata/og.png",
    siteName: "immjs.dev",
    title: "immjs.dev",
    description: "A website made by Juliette, a french teenage developer!",
    url: "https://immjs.dev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <link rel="me" href="https://abtmtr.link/blurbs/#X0AKNVWJUpFpl1uHHw9sxuxHCl3ZbLu8" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="darkreader-lock" />
      </head>
      {children}
    </html>
  );
}
