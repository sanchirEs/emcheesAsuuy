module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['tailwindcss'],
  parserOptions: { project: ['./tsconfig.json'] },
  rules: { 'react/jsx-key': 'error' },
};
