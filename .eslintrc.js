module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],
  rules: {
    semi: 0,
    indent: ['error', 2],
    'array-callback-return': ['error'],
    'no-await-in-loop': ['error'],
    'valid-typeof': ['error'],
    'no-const-assign': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-loss-of-precision': ['error'],
    'no-self-compare': ['error'],
    'no-unreachable': ['error'],
    'no-unused-vars': ['warn'],
    'no-use-before-define': ['error'],
    'use-isnan': ['error'],
    'no-compare-neg-zero': ['error'],
    'block-scoped-var': ['error'],
    'consistent-return': ['error'],
    eqeqeq: ['error'],
    'func-names': ['error', 'as-needed'],
    'no-console': ['warn'],
    'no-else-return': ['error'],
    'no-empty': ['error'],
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-lonely-if': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'block-spacing': ['error'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error'],
    'space-before-blocks': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          // "_animations": './src/components/animations',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          // "_organisms": './src/components/organisms',
          // "_specials": './src/components/specials',
          // "_navigations": './src/navigations',
          // "_screens": './src/screens',
          // "_services": './src/services',
          // "_store": './src/services/store',
          // "_api": './src/services/api',
          // "_styles": './src/styles',
          _redux: './src/redux',
          _utils: './src/utils',
        },
      },
    },
  },
};
