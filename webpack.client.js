const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        client: "./src/Main.page.js"
    },
    target: "web",
    mode: "production",
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
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
};
