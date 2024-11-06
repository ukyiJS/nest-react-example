import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export const eslintReactConfig = [
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          attributes: {
            allowMultiline: false,
          },
          children: true,
        },
      ],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-newline': ['error', {
        prevent: true,
      }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          noSortAlphabetically: false,
          reservedFirst: true,
          shorthandLast: true,
          callbacksLast: true,
        },
      ],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          beforeClosing: 'never',
        },
      ],
    },
  },
];
