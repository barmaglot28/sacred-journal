const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractStylePlugin = new ExtractTextPlugin({
    filename: 'build/frontend/[name].css',
    allChunks: true
});

process.env.BABEL_ENV = 'development';

module.exports = {
    watch: false,
    mode: 'development',
    entry: {
        admin: ['webpack-hot-middleware/client', './src/client/admin/index.js'],
        signin: ['webpack-hot-middleware/client', './src/client/signin/index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build/frontend'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/svg+xml'
                        }
                    }
                ]
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        ExtractStylePlugin,
        new webpack.HotModuleReplacementPlugin(),
    ]
};