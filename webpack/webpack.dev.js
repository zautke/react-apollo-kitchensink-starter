const paths = require("./constants.webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "cheap-module-eval-source-map",

  devServer: {
    contentBase: paths.SRC,
    compress: true,
    clientLogLevel: "error",
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    progress: true,
    hot: true,
    watchContentBase: true
  }
});
