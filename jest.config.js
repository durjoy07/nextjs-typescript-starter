const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Add more setup options before each test is run
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@sections/(.*)': '<rootDir>/src/sections/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@themes/(.*)': '<rootDir>/src/themes/$1',
    '@root/(.*)': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/src/**/*.test.[jt]sx'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ({
  /**
   * Using ...(await createJestConfig(customJestConfig)()) to override transformIgnorePatterns
   * provided byt next/jest.
   *
   * @link https://github.com/vercel/next.js/issues/36077#issuecomment-1096635363
   */
  ...(await createJestConfig(customJestConfig)()),
  /* To prevent node_modules from being transformed by Jest */
  transformIgnorePatterns: [],
});
