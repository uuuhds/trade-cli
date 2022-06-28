const { IS_DIFF } = process.env;

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [],
  extends: [
    'plugin:react/recommended',
    IS_DIFF && 'plugin:diff/diff',
    'plugin:prettier/recommended',
  ].filter(Boolean),
  globals: {
    document: 'readonly',
    window: 'readonly',
    PRODUCT: 'readonly',
  },
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'func-style': 0,
  },
};
