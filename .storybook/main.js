module.exports = {
    stories: [
        "../src/Intro.stories.mdx",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.js",
    ],
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-viewport/register",
    ],
    webpackFinal: (config) => {
        config.module.rules = config.module.rules.map((data) => {
            if (/svg\|/.test(String(data.test)))
                data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
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
