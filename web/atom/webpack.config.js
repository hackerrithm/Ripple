const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // Entr point of our application
    entry: "./src/index.tsx",
    // Output directory of out built files 
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist"),
    },
    // Plugin to help render bind our code to the index.html file
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Phoenix',
            template: path.join('./public/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    // Tell Webpack which JS files to load
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    // Setup our Webpack Loader
    // TS files will pass through ts-loader and then go through Babel
    module: {
        rules: [{
                test: /\.(ts|tsx)?$/,
                exclude: path.join(__dirname, './node_modules'),
                use: [{
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                    }
                ]
            },
            // CSS Loader for styles
            {
                test: /\.css$/,
                exclude: path.join(__dirname, './node_modules'),
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    // Create sourcemaps for debugging
    devtool: "eval-source-map",
    // Setup our dev server
    devServer: {
        inline: true,
        host: process.env.HOST,
        port: 9000,
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
};