const webpack = require("webpack");
const path = require("path");

const pathToLibrary = (name) =>
    path.resolve(__dirname, `./node_modules/${name}`);

module.exports = {
    entry: "./src/ssr.js",
    target: "node",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "ssr.js",
        libraryTarget: "commonjs2",
    },
    resolve: {
        alias: {
            "apollo-utilities": pathToLibrary("apollo-utilities"),
            "core-js": pathToLibrary("core-js"),
            "prop-types": pathToLibrary("prop-types"),
            "hoist-non-react-statics": pathToLibrary("hoist-non-react-statics"),
            "@emotion/memoize": pathToLibrary("@emotion/memoize"),
            "@emotion/stylis": pathToLibrary("@emotion/stylis"),
            "@emotion/hash": pathToLibrary("@emotion/hash"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.SERVER": JSON.stringify(true),
        }),
    ],
};
