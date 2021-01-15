// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ver = require('./package.json').version;

const env = process.env.NODE_ENV;
const isProd = env === 'production';
const publicPath = isProd ? `dist/${ver}/js` : 'dist/dev/js';

module.exports = {
    mode: env,
    cache: true,
    entry: {
        index: path.resolve(__dirname, 'src/index.tsx'),
    },
    output: {
        path: env === 'production' ? path.resolve(__dirname, `public/dist/${ver}/js`) : path.resolve(__dirname, 'public/dist/dev/js'),
        publicPath,
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[chunkhash].js',
        hashDigestLength: 6,
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },
    devtool: isProd ? false : 'eval-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['styled-jsx/babel'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                auto: true,
                                localIdentName: isProd ? '__[hash:base64:8]' : '__[local]',
                            },
                            sourceMap: !isProd,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer',
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                            sourceMap: !isProd,
                        },
                    },
                ],
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                auto: true,
                                localIdentName: isProd ? '[hash:base64:8]' : '[local]',
                            },
                            sourceMap: !isProd,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer',
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                            sourceMap: !isProd,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProd,
                        },
                    },
                ],
            },
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [
                                'styled-jsx/babel',
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: './tsconfig.json' }),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'public/index.html'),
            title: 'Sample HTML',
            template: 'src/static.tsx',
            inject: true,
            minify: false,
        }),
        // new BundleAnalyzerPlugin(),
    ],
};
