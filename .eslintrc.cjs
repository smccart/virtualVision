// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: require.resolve('@typescript-eslint/parser'),
//     extraFileExtensions: ['.vue'],
//   },
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'plugin:@typescript-eslint/recommended',
//     'plugin:vue/vue3-essential',
//     'prettier',
//   ],
//   plugins: ['@typescript-eslint', 'vue'],
//   globals: {
//     module: 'readonly',
//     require: 'readonly',
//     process: 'readonly',
//   },
//   overrides: [
//     {
//       files: ['quasar.config.js', '.eslintrc.cjs'],
//       env: {
//         node: true,
//       },
//       rules: {
//         'no-undef': 'off',
//         '@typescript-eslint/no-require-imports': 'off',
//       },
//     },
//   ],
//   rules: {
//     'prefer-promise-reject-errors': 'off',
//     quotes: ['warn', 'single', { avoidEscape: true }],
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/no-var-requires': 'off',
//     'no-unused-vars': 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//   },
// };
