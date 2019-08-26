const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: "./src/app.js",
  output: {
    path: "/",
    filename: "bundle.js"
  },
  

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true
  }
};
