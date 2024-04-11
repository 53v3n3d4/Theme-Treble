import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
// Flat config issue need publish new version to npm
// https://github.com/standard/eslint-config-standard/issues/351
// import standard from 'eslint-config-standard'

const compat = new FlatCompat()

export default [
  // standard,
  ...compat.extends('eslint-config-standard'),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
]
