module.exports = {
  // env: An environment provides predefined global variables.
  env: {
    browser: true,
    es2022: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['src/main.tsx', '*.config.ts'] },
    ],
  },
};
