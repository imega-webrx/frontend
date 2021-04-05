const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const configRules = require("./webpack.common");

module.exports = Object.assign({}, configRules, {
    entry: {
        client: "./src/Main.page.js"
    },
    target: "web",
    mode: "production",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ie8: false,
                    output: {
                        comments: false
                    }
                },
                sourceMap: true,
                extractComments: false
            })
        ]
    }
});
