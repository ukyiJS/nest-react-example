import { eslintJavascriptConfig } from './config/eslint/eslint-javascript.config.mjs';
import { eslintTypescriptConfig } from './config/eslint/eslint-typescript.config.mjs';
import { eslintFormatConfig } from './config/eslint/eslint-format.config.mjs';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...eslintFormatConfig,
  ...eslintJavascriptConfig,
  ...eslintTypescriptConfig,
  {
    ignores: [
      'node_modules',
      'dist',
    ],
  },
];
