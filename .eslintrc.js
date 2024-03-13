module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/no-unescaped-entities': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'import/named': '2',
    'import/namespace': '2',
    'import/default': '2',
    'import/export': '2',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
