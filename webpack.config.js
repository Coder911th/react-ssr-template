const
    fs = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    nodeExternals = require('webpack-node-externals'),
    DEVELOPMENT_MODE = process.env.NODE_ENV !== 'production'

// Общие конфигурации
const commonRootConfig = {
    mode: DEVELOPMENT_MODE
        ? 'development'
        : 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    watch: DEVELOPMENT_MODE,
    devtool: DEVELOPMENT_MODE
        ? 'inline-source-map'
        : null,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            // Загружаем список страниц сайта
            PAGES: JSON.stringify(
                fs.readdirSync('./pages').map(name =>
                    name.replace('.js', '')))
        })
    ]
}

// Серверные конфигурации
const serverConfig = {
    ...commonRootConfig,
    target: 'node',
    context: __dirname,
    node: {
        __dirname: true,
        __filename: true
    },
    entry: {
        server: './server/ServerCore'
    },
    externals: [nodeExternals()],
}

// Клиентские конфигурации
const clientConfig = {
    ...commonRootConfig,
    target: 'web',
    entry: {
        '../public/page-core': './helpers/PageCore.js'
    },
    optimization: {
        minimize: false,
        runtimeChunk: {
            name: '../public/page-base'
        },
        splitChunks: {
            cacheGroups: {
                default: false,
                ['../public/page-base']: {
                    test: /\.js?$/,
                    chunks: 'all',
                    minChunks: 2,
                    name: '../public/page-base',
                    enforce: true
                }
            }
        }
    }
}

module.exports = [serverConfig, clientConfig]