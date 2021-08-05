module.exports = {
    "root": true,
    "env": {
      "node": true,
      "browser": true
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
      "parser": "@typescript-eslint/parser",
      "ecmaVersion": 2021,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any":"off"
    },
  }
