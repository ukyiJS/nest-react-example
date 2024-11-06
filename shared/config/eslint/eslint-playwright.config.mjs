import pluginPlaywright from 'eslint-plugin-playwright';

export const eslintPlaywrightConfig = [
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
];
