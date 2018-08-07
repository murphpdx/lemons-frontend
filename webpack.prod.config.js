const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: {
        main: [
            './src/index.js',
        ],
    },
    // Render source-map file for final build
    devtool: 'source-map',
    // output config
    output: {
        path: path.resolve(__dirname, 'dist'), // Path of output file
        filename: 'app.js', // Name of output file
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            filename: 'index.html',
            appMountId: 'app'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                },
            },
        ],
    },
};

module.exports = config;