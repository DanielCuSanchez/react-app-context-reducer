module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': ['error', { caughtErrors: 'none' }],
    'space-before-function-paren': ['error', 'never'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0
  }
}
