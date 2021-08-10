// module.exports = {
//   roots: ['<rootDir>'],
//   modulePaths: ['<rootDir>'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
//   testEnvironment: 'jsdom',
//   testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
//   transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'babel-jest',
//   },
//   moduleNameMapper: {
//     '\\.(gif|ttf|eot|svg|png|webp)$': '<rootDir>/__mocks__/fileMock.js',
//     'pages/(.*)': '<rootDir>/src/pages/$1',
//     'styles/(.*)': '<rootDir>/src/styles/$1',
//     'components/(.*)': '<rootDir>/src/components/$1',
//     'templates/(.*)': '<rootDir>/src/templates/$1',
//     'hooks/(.*)': '<rootDir>/src/hooks/$1',
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// }
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>/src/'],
}
