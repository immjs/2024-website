import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1040px',
        'xl': '1352px',
      },
      colors: {
        'black': '#000000',
      },
      backgroundImage: {
        'zerotofull': 'linear-gradient(90deg, rgba(var(--ctp-text), 0) 0%, rgba(var(--ctp-text), 255) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        heading: ['var(--font-space-grotesk)'],
        mono: ['var(--font-space-mono)'],
      },
      spacing: {
        'minone': '-1.6rem',
        'zero': '0rem',
        'one': '1.6rem',
        'half': '0.8rem',
        'two': '3.2rem',
      },
      borderRadius: {
        'one': '1.6rem',
        'half': '0.8rem',
        'two': '3.2rem',
      },
      fontSize: {
        'small': '0.8rem',
        'big': '1.2rem',
        'huge': '1.8rem',
      },
      opacity: {
        'zero': '0',
        'ghost': '0.5',
        'full': '1',
      },
      borderWidth: {
        'slim': '0.25em',
      },
      gap: {
        'one': '0.8rem',
        'half': '0.4rem'
      },
    },
  },
  plugins: [catppuccin({
    prefix: 'cat',
    defaultFlavour: 'mocha',
  })],
};

export default config;
