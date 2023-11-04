/** @type {import('prettier').Options} */

export default {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  printWidth: 90,
  tabWidth: 2,
  trailingComma: "es5",

  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],

  importOrderSeparation: true,

  importOrderSortSpecifiers: true,

  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],

  arrowParens: "always",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  requirePragma: false,
  singleAttributePerLine: false,
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "auto",
};
