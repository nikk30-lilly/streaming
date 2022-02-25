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
    static: {
      directory: path.join(__dirname, "assets/"),
    },
    devMiddleware: {
      // publicPath: "https://localhost:8080/dist/",
    },
  },
  devtool: "cheap-module-source-map",
  plugins: [],
});
