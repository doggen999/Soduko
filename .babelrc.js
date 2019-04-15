const plugins = ["@babel/plugin-transform-runtime"];

module.exports = {
  env: {
    test: {
      presets: ["@babel/react", "@babel/preset-env"],
      retainLines: true,
      plugins,
    },
  },
  presets: [
    "@babel/react",
    [
      "@babel/env",
      {
        modules: false,
      },
    ],
  ],
  plugins,
};
