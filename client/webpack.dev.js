import webpackCommon from "./webpack.common.js";
import { merge } from "webpack-merge";

export default merge(webpackCommon, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
    historyApiFallback: {
      index: "/",
    },
  },
});
