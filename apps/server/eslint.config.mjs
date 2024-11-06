import { eslintJavascriptConfig } from 'shared/config/eslint/eslint-javascript.config.mjs';
import { eslintTypescriptConfig } from 'shared/config/eslint/eslint-typescript.config.mjs';
import { eslintReactConfig } from 'shared/config/eslint/eslint-react.config.mjs';
import { eslintFormatConfig } from 'shared/config/eslint/eslint-format.config.mjs';
import globals from 'globals';
import { eslintVitestConfig } from 'shared/config/eslint/eslint-vitest.config.mjs';
import { eslintPlaywrightConfig } from 'shared/config/eslint/eslint-playwright.config.mjs';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...eslintFormatConfig,
  ...eslintJavascriptConfig,
  ...eslintTypescriptConfig,
  ...eslintReactConfig,
  ...eslintVitestConfig,
  ...eslintPlaywrightConfig,
  {
    ignores: [
      'node_modules',
      'dist',
      'coverage',
    ],
  },
];
