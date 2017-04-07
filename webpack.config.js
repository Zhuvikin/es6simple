const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    context: path.resolve(__dirname, './src'),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader'
                }],
            },
        ],
    },
    devServer: {
        port: 9000,
        open: true,
        compress: true,
        contentBase: path.resolve(__dirname, './src')
    }
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //             drop_console: false,
    //         }
    //     })
    // ]
};
