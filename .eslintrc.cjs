module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps': 0,
    'no-param-reassign': [2, { props: false }],
    'max-len': [2, { code: 120 }],
    'react/destructuring-assignment': [2, 'never', { ignoreClassFields: true }],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
  },
}
