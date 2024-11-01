// craco.config.js
const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                buffer: require.resolve('buffer/'),
                assert: require.resolve('assert/'),
                crypto: require.resolve('crypto-browserify'),
                stream: require.resolve('stream-browserify'),
                vm: require.resolve('vm-browserify'),
                process: require.resolve('process/browser'),
            };

            // 如果需要，可以在这里添加 ProvidePlugin
            const webpack = require('webpack');
            webpackConfig.plugins.push(
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                    process: 'process/browser',
                })
            );

            return webpackConfig;
        },
    },
};
