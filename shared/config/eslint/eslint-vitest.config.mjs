import pluginVitest from '@vitest/eslint-plugin';

export const eslintVitestConfig = [
  {
    ...pluginVitest.configs.recommended,
    files: ['**/*.test.*', '**/*.spec.*'],
  },
];
