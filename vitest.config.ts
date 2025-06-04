import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		projects: [
			// matches every folder and file inside the `packages` folder
			'packages/*',
		],
		coverage: {
			reporter: ['text', 'lcov', 'cobertura'],
			exclude: [...configDefaults.exclude, '**/src/index.ts', '**/*.mock..ts'],
			thresholds: {
				statements: 80,
			},
		},
	},
});
