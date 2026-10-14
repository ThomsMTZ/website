/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './utils/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c5a880',
          light: '#e4d1b8',
          dark: '#8c7350',
        },
        noir: {
          950: '#070709',
          900: '#0b0b0f',
          850: '#111116',
          800: '#17171e',
          700: '#262633',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
