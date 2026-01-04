const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env }) => {
            if (env === 'production') {
                webpackConfig.plugins.push(
                    new CompressionPlugin({
                        filename: '[path][base].gz',
                        algorithm: 'gzip',
                        test: /\.(js|css|html|svg|json)$/,
                        threshold: 10240,
                        minRatio: 0.8,
                    })
                );

                webpackConfig.optimization = {
                    ...webpackConfig.optimization,
                    splitChunks: {
                        chunks: 'all',
                        minSize: 20000,
                        maxSize: 244000,
                        cacheGroups: {
                            vendor: {
                                test: /[\\/]node_modules[\\/]/,
                                name: 'vendors',
                                chunks: 'all',
                                priority: 10,
                            },
                            mui: {
                                test: /[\\/]node_modules[\\/]@mui[\\/]/,
                                name: 'mui',
                                chunks: 'all',
                                priority: 20,
                            },
                            common: {
                                minChunks: 2,
                                priority: 5,
                                reuseExistingChunk: true,
                            },
                        },
                    },
                };
            }
            return webpackConfig;
        },
    },
};
