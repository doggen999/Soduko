const atImport = require("postcss-import");
const normalise = require("postcss-normalize");
const presetEnv = require("postcss-preset-env");

module.exports = {
  modules: true,
  plugins: [
    atImport({ path: ["src"] }),
    normalise({}),
    presetEnv({ features: { "nesting-rules": true } }),
  ],
};
