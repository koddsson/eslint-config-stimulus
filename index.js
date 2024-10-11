import unusedTargets from "./src/rules/unused-targets.js";

const plugin = {
  meta: {},
  configs: {},
  rules: {
    "unused-targets": unusedTargets,
  },
  processors: {},
};

const recommended = {
  plugins: {
    stimulus: plugin,
  },
  "unused-targets": "error",
};

export const configs = {
  recommended,
};
