import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#e8effe',
          100: '#c0d3f5',
          200: '#93b3ea',
          300: '#6691e0',
          400: '#3b6fd4',
          500: '#2451b8',
          600: '#1e3d8f',
          700: '#162d6b',
          800: '#0e1f45',
          900: '#060d1f',
        },
        surface: {
          DEFAULT: '#080c14',
          secondary: '#0e1420',
          elevated: '#141c2e',
          highlight: '#0b1018',
        },
      },
    },
  },
  plugins: [],
};

export default config;
