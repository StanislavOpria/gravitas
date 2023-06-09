module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: [
    'no-inline-styles',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
  },
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'no-inline-styles/no-inline-styles': 2,
    'no-param-reassign': [2, { props: false }],
    'max-len': [2, { code: 120 }],
    'react/destructuring-assignment': [2, 'never', { ignoreClassFields: true }],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
  },
};
