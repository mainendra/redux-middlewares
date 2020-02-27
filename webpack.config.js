const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DEV_SERVER_PORT = 8080;

module.exports = (env = {}) => {
    return [{
        name: 'dev',
        mode: 'development',
        devtool: 'cheap-eval-source-map',
        entry: './src/index.js',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    // this is so that we can compile any React,
                    // ES6 and above into normal ES5 syntax
                    test: /\.(js|jsx)$/,
                    // we do not want anything from node_modules to be compiled
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(css|less)$/,
                    use: [
                        'style-loader', // creates style nodes from JS strings
                        'css-loader', // translates CSS into CommonJS
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin([{
                from: '*.html'
            }]),
            new webpack.ProvidePlugin({
                'React': 'react'
            })
        ],
        devServer: {
            port: DEV_SERVER_PORT
        }
    }];
};
