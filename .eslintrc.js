module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-native'],
  rules: {
    'no-multi-assign': 'off',
    'no-nested-ternary': 'off',
    'global-require': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/first': 'off',
  },
};
