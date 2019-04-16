module.exports = {
  module: {
    rules: [
      {
        test: /\.[s]?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "top",
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]--[hash:base64:5]",
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
};
