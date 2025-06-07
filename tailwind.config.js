// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],

  corePlugins: {
    preflight: false,   // ← disables Tailwind’s CSS reset
    container: false,   // ← stops Tailwind from touching .container
  },

  theme: {
    extend: {},
  },
};
