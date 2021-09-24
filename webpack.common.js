const configRules = {
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
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            // {
            //     test: /\.css$/i,
            //     loader: "css-loader",
            // },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },

    devServer: {
        static: "build",
        watchContentBase: true,
    },
};

module.exports = configRules;
