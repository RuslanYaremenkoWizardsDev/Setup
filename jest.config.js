const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
  ],
  globals: {
    window: true,
  },
  collectCoverageFrom: ['**/*.jsx', '**/*.js', '**/*.tsx', '**/*.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testMatch: [
    '**/*.(test|spec).(js)',
    '**/*.(test|spec).(ts)',
    '**/*.(test|spec).(tsx)',
  ],
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: [
    'json',
    'lcov',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.next',
    'jest.config.js',
    'coverage',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};

module.exports = createJestConfig(customJestConfig);
