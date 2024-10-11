import js from "@eslint/js";
import nodePlugin from "eslint-plugin-n";
import eslintPlugin from "eslint-plugin-eslint-plugin";

export default [
  js.configs.recommended,
  nodePlugin.configs["flat/recommended-module"],
  eslintPlugin.configs["flat/recommended"],
  {
    "rules": {
      "n/no-extraneous-import": "off",
      "n/no-unpublished-import": "off",
    },
  },
];
