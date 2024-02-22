module.exports = {
  env: {
    node: true,
    browser: true,
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": 0,
  },
};
