import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
	moduleNameMapper: {
		'^@/modules/(.*)$': '<rootDir>/modules/$1',
		'^@/common/(.*)$': '<rootDir>/common/$1',
		'^@/hooks/(.*)$': '<rootDir>/hooks/$1',
		'^@/layouts/(.*)$': '<rootDir>/layouts/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
