module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: [],
  parserOptions: { project: ['./tsconfig.json'] },
  rules: { 'react/jsx-key': 'error', 'react/no-unescaped-entities': 'off' },
};
