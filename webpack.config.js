const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },
    devServer: {
        port: '8080',
        static: path.resolve(__dirname),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ],
    },
};