import type { Metadata } from "next";
import "./globals.css";

import { dmSans, spaceGrotesk, spaceMono } from "@/components/fonts";
import { getTheme } from "@/components/theme";
import { getToken } from "@/components/csrf";

import { headers } from "next/headers";

export const metadata: Metadata = {
  title: 'immjs.dev',
  description: 'A website made by Juliette, a french teenage developer!',
  openGraph: {
    images: '/og.png',
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
  const theme = getTheme();
  const token = getToken();
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className={`relative bg-cat-crust ${theme === 'light' ? 'cat-latte' : ''}`}>
        {children}
      </body>
    </html>
  );
}
