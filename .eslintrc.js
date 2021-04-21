module.exports = {
  env: {
      browser: true,
      es6: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', "react-hooks"],
  rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-var': 'error',
      'brace-style': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'space-before-blocks': 'error',
      'import/prefer-default-export': 'off',
  },
  overrides: [
      {
          files: [
              '**/*.test.js',
              '**/*.test.jsx',
              '**/*.test.tsx',
              '**/*.spec.js',
              '**/*.spec.jsx',
              '**/*.spec.tsx',
          ],
          env: {
              jest: true,
          },
      },
  ],
};