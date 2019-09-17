module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    $: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "linebreak-style": "off",
    "func-names": "off"
  }
};
