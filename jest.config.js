module.exports = {
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/testSetup.js',
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
