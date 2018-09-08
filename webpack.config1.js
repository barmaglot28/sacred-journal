const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractStylePlugin = new ExtractTextPlugin({
    filename: './css/[name].css',
    allChunks: true
});
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

process.env.NODE_ENV = 'development';
module.exports = {
    mode: 'development',
    bail: true,
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    entry: {
        main: ['babel-polyfill', path.join(__dirname, './src/index.jsx')],
        admin: path.join(__dirname, './src/admin/panel/index.jsx'),
    },
    output: {
        path: path.join(__dirname, './build/static'),
        filename: './js/[name].js',
        chunkFilename: './js/[name].chunk.js',
        publicPath: '/build/'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            'babel-runtime': path.dirname('babel-runtime/package.json')
        }
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(jsx|js)$/,
                        include: path.join(__dirname, './src'),
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            sourceMap: true,
                            presets: ['env', 'react', 'stage-0', 'babel-preset-react-app'],
                            plugins: ['source-map-support'],
                            compact: true
                        }
                    },

                    {
                        test: /\.(scss|css)$/,
                        loader: ExtractStylePlugin.extract({
                            fallback: {
                                loader: 'style-loader',
                                options: {
                                    hmr: true
                                }
                            },
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        importLoaders: 1,
                                        localIdentName: '[name]__[local]__[hash:base64:5]',
                                        hmr: true,
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        plugins: [
                                            autoprefixer({
                                                browsers: ['ie >= 8', 'last 4 version']
                                            })
                                        ],
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: 'resolve-url-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                },

                                {
                                    loader: 'sass-loader',
                                    options: {
                                        hmr: true,
                                        sourceMap: true,
                                        sourceMapContents: true
                                    }
                                }
                            ]
                        })
                    },
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: 'file-loader',
                        options: {
                            limit: 10000,
                            name: 'media/[name].[ext]'
                        }
                    },
                    {
                        test: /\.svg$/,
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'file-loader',
                        exclude: [/\.jsx?$/, /\.html$/, /\.json$/],
                        options: {
                            name: './media/[name].[ext]'
                        }
                    },
                    {
                        test: /\.woff$/,
                        loader: 'url-loader?mimetype=application/font-woff&name=media/[name].[ext]'
                    },
                    {
                        test: /\.woff2$/,
                        loader: 'url-loader?mimetype=application/font-woff2&name=media/[name].[ext]'
                    },
                    {
                        test: /\.otf$/,
                        loader:
                            'url-loader?mimetype=application/octet-stream&name=media/[name].[ext]'
                    },
                    {
                        test: /\.ttf$/,
                        loader:
                            'url-loader?mimetype=application/octet-stream&name=media/[name].[ext]'
                    },
                    {
                        test: /\.eot$/,
                        loader:
                            'url-loader?mimetype=application/vnd.ms-fontobject&name=media/[name].[ext]'
                    }
                ]
            }
        ]
    },
    plugins: [
        ExtractStylePlugin,
        HotModuleReplacementPlugin,
        new LiveReloadPlugin({
            host: 'localhost',
            port: 34512
        })
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        module: 'empty',
        child_process: 'empty'
    }
};
