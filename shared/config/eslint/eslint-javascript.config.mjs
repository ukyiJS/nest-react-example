import js from '@eslint/js';

export const eslintJavascriptConfig = [
  js.configs.recommended,
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
    rules: {
      eqeqeq: ['warn', 'always'],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-empty': ['warn', {
        allowEmptyCatch: true,
      }],
      'no-else-return': ['error', {
        allowElseIf: false,
      }],
      'no-return-await': 'error',
      'no-self-assign': ['error', {
        props: true,
      }],
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-lonely-if': 'error',

      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': ['error', 'always'],
      'newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 2,
      }],
      'prefer-const': [
        'warn',
        {
          destructuring: 'all',
        },
      ],
      'prefer-destructuring': ['error', {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      }, {
        enforceForRenamedProperties: false,
      }],
      'prefer-object-spread': 'error',
      'prefer-exponentiation-operator': 'error',
    },
  },
];
