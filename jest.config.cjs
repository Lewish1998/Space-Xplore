module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    // Add more aliasing if needed for your project structure
  },
  // Other Jest configuration settings
};
