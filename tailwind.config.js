/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  corePlugins: {
    preflight: false,   // ← disables Tailwind's CSS reset
    container: false,   // ← stops Tailwind from touching .container
  },

  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#64748B',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },

  plugins: [],
};
