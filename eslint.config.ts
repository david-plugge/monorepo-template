import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint, { type ConfigArray } from 'typescript-eslint';

const config: ConfigArray = tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,

	{
		...vitest.configs.recommended,
		files: ['**/*.{spec.test}.ts'],
	},

	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},

	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
			sourceType: 'module',
			parser: tseslint.parser,
		},
	},

	{
		name: 'files-to-lint',
		files: ['src/**/*.ts'],
	},
	{
		name: 'files-to-ignore',
		ignores: ['**/dist/**', './coverage'],
	},

	prettier,
);

export default config;
