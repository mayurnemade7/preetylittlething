module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: [
      '<rootDir>/__tests__/setup.js',
      './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    testPathIgnorePatterns: [
      '<rootDir>/__tests__/setup.js',
      '<rootDir>/__mocked__/*.{ts,tsx}',
      'src/mocks',
      '<rootDir>/src/api/endpoints.ts',
      'Strings.ts',
      'Screen.tsx',
      'src/config',
    ],
  };