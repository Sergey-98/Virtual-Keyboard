module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'airbnb-base/legacy',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off'
  }
};
