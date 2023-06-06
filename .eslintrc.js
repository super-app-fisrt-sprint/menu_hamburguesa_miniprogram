module.exports = {
  extends: "standard",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    Page: "readonly",
    App: "readonly",
    Component: "readonly",
    my: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "no-undef": "error",
    indent: ["error", 2],
    "no-console": "warn",
    camelcase: ["error", { properties: "always" }],
    quotes: "off",
    semi: "off",
    "no-debugger": "error",
    "no-constant-condition": "error"
  }
};
