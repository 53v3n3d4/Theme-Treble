// Flat config issue need publish new version to npm
// https://github.com/standard/eslint-config-standard/issues/351
// import standard from 'eslint-config-standard'

// export default [
//   standard,
//   {
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module'
//     }
//   },
//   {
//     "files": ["**/*.test.js"],
//     "env": {
//       "jest": true
//     }
//   }
// ]

import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
  // mimic ESLintRC-style extends
  ...compat.extends('.eslintrc.cjs')
]
