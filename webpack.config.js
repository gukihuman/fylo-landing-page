const path = require('path')

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
    mode: 'development'
}