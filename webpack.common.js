const path = require('path');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './style.css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            inject: 'body',
        }),
        new HtmlWebpackPugPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ]
            },
        ],
    },
};