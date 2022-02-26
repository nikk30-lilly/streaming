// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const path = require("path");
module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [],
});
