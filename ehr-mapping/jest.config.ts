import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/*.test.tsx', '**/*.test.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/app/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;