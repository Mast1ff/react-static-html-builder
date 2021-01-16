module.exports = {
    plugins: [
        'react',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'airbnb',
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        indent: 'off',
        camelcase: 'off',
        'no-tabs': 'off',
        'eol-last': 'warn',
        'comma-dangle': 'warn',
        'comma-spacing': 'warn',
        'max-len': ['error', {
            code: 200,
        }],
        'linebreak-style': 'off',
        'jsx-quotes': ['warn', 'prefer-single'],
        'arrow-body-style': ['warn', 'as-needed'],
        'prefer-promise-reject-errors': 'off',
        'prefer-const': ['warn', {
            destructuring: 'all',
            ignoreReadBeforeAssign: false,
        }],
        'object-curly-newline': ['warn', {
            ObjectPattern: { multiline: true },
        }],
        'object-curly-spacing': ['warn', 'always'],
        'no-underscore-dangle': 'off',
        'no-template-curly-in-string': 'error',
        'no-return-assign': 'off',
        'no-use-before-define': 'off',
        'no-empty-pattern': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-closing-bracket-location': ['warn', {
            nonEmpty: 'tag-aligned',
            selfClosing: 'tag-aligned',
        }],
        'react/jsx-curly-spacing': ['warn', 'always'],
        'react/jsx-curly-brace-presence': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            plugins: [
                '@typescript-eslint/eslint-plugin',
            ],
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                '@typescript-eslint/no-empty-interface': 'off',
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/indent': ['warn', 4],
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/await-thenable': 'off',
            },
        },
    ],
};
