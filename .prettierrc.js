module.exports = {
  trailingComma: 'none',
  bracketSpacing: false,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  singleAttributePerLine: true,
  overrides: [
    {
      files: '**/*.acss',
      options: {
        parser: 'css',
      },
    },
    {
      files: '**/*.axml',
      options: {
        parser: 'html',
      },
    },
  ],
};
