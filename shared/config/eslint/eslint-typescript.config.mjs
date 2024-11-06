import tseslint from 'typescript-eslint';

export const eslintTypescriptConfig = [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,cts,mts,tsx,vue}'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-empty-function': ['error', {
        allow: ['functions', 'arrowFunctions', 'constructors', 'methods'],
      }],
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: true,
        ignoreRestArgs: true,
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
      }],
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',

            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'public-static-method',
            'protected-static-method',
            'private-static-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'method'],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/sort-type-constituents': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
];
