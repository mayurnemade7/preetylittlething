module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: [
      '<rootDir>/__tests__/setup.js',
      './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
  };