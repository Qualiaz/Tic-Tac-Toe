const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/app.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },

  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5001,
    open: true,
    hot: false,
    compress: true,
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },

      {
        test: /\.(svg|ico|png|webp|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"), //create temp file
    }),
  ],
};
