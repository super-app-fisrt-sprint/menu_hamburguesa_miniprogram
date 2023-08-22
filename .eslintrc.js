module.exports = {
  extends: "standard",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  globals: {
    Page: "readonly",
    App: "readonly",
    Component: "readonly",
    my: "readonly",
    getApp: "writable"
  },
  parserOptions: {
    ecmaVersion: 2022
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
