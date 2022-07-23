module.exports = {
  // env: An environment provides predefined global variables.
  env: {
    browser: true,
    es2022: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended'],
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
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx', 'ts'] }],
    'prettier/prettier': 'off',
    'import/order': 'off',
    semi: [2, 'always'],
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [2, 'never'],
  },
  settings: {
    'import/core-modules': ['unocss/vite', 'uno.css'],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
};
