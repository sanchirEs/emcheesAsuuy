// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nesting': {},     // if you need nesting
    '@tailwindcss/postcss': {}, // <— the new bridge
    autoprefixer: {},
  },
}