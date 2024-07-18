import type { Metadata } from "next";
import "./globals.css";

import { dmSans, spaceGrotesk, spaceMono } from "@/components/fonts";

import { cookies } from "next/headers";
import { ApplyContexts } from "./layout_contexts";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://immjs.dev'),
  title: 'immjs.dev',
  description: 'A website made by Juliette, a french teenage developer!',
  openGraph: {
    images: '/metadata/og.png',
    siteName: 'immjs.dev',
    title: 'immjs.dev',
    description: 'A website made by Juliette, a french teenage developer!',
    url: 'https://immjs.dev/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme')?.value as 'light' | 'dark';
  const token = cookies().get('csrf')!.value;
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className="relative">
        <SpeedInsights />
        <ApplyContexts ogTheme={theme || 'dark'} csrf={token}>{children}</ApplyContexts>
      </body>
    </html>
  );
}
