module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // Keep minimal ruleset; focus on correctness, not strict style enforcement.
    "no-console": "off",
  },
};
