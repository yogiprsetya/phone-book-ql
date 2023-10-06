const nextJest = require('next/jest');
const { defaults } = require('jest-config');

const babelConfigEmotion = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      }
    ]
  ],
  plugins: [require.resolve('babel-plugin-macros'), require.resolve('@emotion/babel-plugin')]
};

// Add any custom config to be passed to Jest
const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^api/(.*)': '<rootDir>/api/$1',
    '^app/(.*)': '<rootDir>/app/$1',
    '^components/(.*)': '<rootDir>/components/$1',
    '^config/(.*)': '<rootDir>/config/$1',
    '^hooks/(.*)': '<rootDir>/hooks/$1',
    '^services/(.*)': '<rootDir>/services/$1',
    '^__mocks__/(.*)': '<rootDir>/__mocks__/$1'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', babelConfigEmotion],
    '^.+\\.(ts|tsx|mjs)?$': 'ts-jest'
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  moduleFileExtensions: defaults.moduleFileExtensions,
  moduleDirectories: ['node_modules', 'bower_components', 'app', 'components']
};

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
