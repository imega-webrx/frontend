module.exports = {
    core: {
        builder: "webpack5"
    },
    stories: [
        "../src/Intro.stories.mdx",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.js",
    ],
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-viewport/register",
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    // When you have splitted your css over multiple files
                    // and use @import('./other-styles.css')
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    // When using postCSS 8
                    implementation: require('postcss'),
                },
            },
        },
    ],
    webpackFinal: (config) => {
        config.module.rules = config.module.rules.map((data) => {
            if (/svg\|/.test(String(data.test)))
                data.test =
                    /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
            return data;
        });
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        test: /\.svg$/,
                        use: [
                            {
                                loader: "@svgr/webpack",
                                options: {
                                    dimensions: false,
                                    prettier: false,
                                },
                            },
                        ],
                    },
                ],
            },
        };
    },
};
