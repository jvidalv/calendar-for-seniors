module.exports = {
  root: true,
  extends: ['@callstack'],
  plugins: ['react-native'],
  rules: {
    'one-var': 'off',
    'no-multi-assign': 'off',
    'no-nested-ternary': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/first': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off',
    'react-native/no-raw-text': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};
