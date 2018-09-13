const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

const ExtractStylePlugin = new ExtractTextPlugin({
    filename: './[name].css',
    allChunks: true
});

process.env.BABEL_ENV = "development";

module.exports = {
    mode: "development",
    entry: {
        admin: "./src/client/admin/index.js",
        signin: "./src/client/signin/index.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractStylePlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                    },
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'resolve-url-loader'
                        },

                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: ["css-loader", "sass-loader"]
                    })
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            },
            {
                test: /\.woff$/,
                loader: 'url-loader?mimetype=application/font-woff&name=[name].[ext]'
            },
            {
                test: /\.woff2$/,
                loader: 'url-loader?mimetype=application/font-woff2&name=[name].[ext]'
            },
            {
                test: /\.otf$/,
                loader:
                    'url-loader?mimetype=application/octet-stream&name=[name].[ext]'
            },
            {
                test: /\.ttf$/,
                loader:
                    'url-loader?mimetype=application/octet-stream&name=[name].[ext]'
            },
            {
                test: /\.eot$/,
                loader:
                    'url-loader?mimetype=application/vnd.ms-fontobject&name=[name].[ext]'
            }
        ]
    },
    plugins: [
        ExtractStylePlugin,
        new LiveReloadPlugin({
            host: "localhost",
            port: 34512
        }),
    ]
};