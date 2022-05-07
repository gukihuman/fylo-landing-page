const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: [
        './src/script.js',
        './src/dev.js',
    ],
    devServer: {
        port: '8080',
        static: path.resolve(__dirname, 'public'),
        hot: true
    },
});
