export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(babel-jest|@shopify/hydrogen)/)',
  ],
};
