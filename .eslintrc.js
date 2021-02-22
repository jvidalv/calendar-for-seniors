module.exports = {
  root: true,
  extends: ['@callstack'],
  plugins: ['react-native'],
  env: {
    'jest/globals': true,
  },
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
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [['app', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
