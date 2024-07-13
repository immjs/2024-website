import { Space_Grotesk, Space_Mono, DM_Sans } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});
export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
});
