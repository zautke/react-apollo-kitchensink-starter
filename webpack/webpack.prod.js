const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    
    plugins: [
        new UglifyJSPlugin({

        }),
        new ExtractTextPlugin("style.bundle.[hash].css"),
    ]}
});
