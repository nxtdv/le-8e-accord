import { configApp } from "@adonisjs/eslint-config";

export default configApp({
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  rules: {
    "@unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "@unicorn/prefer-module": "off",
  },
});
