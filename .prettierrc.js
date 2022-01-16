module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  trailingComma: 'all',
  arrowParens: "always",
  overrides: [
    {
      files: '*.{json,css,yml,md}',
      options: { singleQuote: false },
    },
  ],
};