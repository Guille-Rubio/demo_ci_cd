// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true //admitir las palabras clave de jest 
  },

  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: [
      2,
      'always'
    ]
  }
};
