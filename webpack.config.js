const
    fs = require('fs'),
    path = require('path'),
    webpack = require('webpack'),
    nodeExternals = require('webpack-node-externals'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    MiniCssExtractPlugin = require("mini-css-extract-plugin")

const
    DEVELOPMENT_MODE = process.env.NODE_ENV !== 'production',
    ANALYZE_CLIENT_BUNDLE = false

const commonPuginsConfig = [
    new webpack.DefinePlugin({
        // Загружаем список страниц сайта
        PAGES: JSON.stringify(
            fs.readdirSync('./pages').map(name =>
                name.replace('.js', '')))
    })
]

const commonRulesConfig = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    }
]

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
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'components'),
            Helpers: path.resolve(__dirname, 'helpers')
        }
    },
    module: {
        rules: commonRulesConfig
    },
    plugins: commonPuginsConfig
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
    module: {
        rules: [
            ...commonRulesConfig,
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: "null-loader"}
                ]
            }
        ]
    }
}

const clientPluginsConfig = [
    ...commonPuginsConfig,
    new MiniCssExtractPlugin({
        filename: "[name].css"
    })
]
if (ANALYZE_CLIENT_BUNDLE) {
    clientPluginsConfig.push(new BundleAnalyzerPlugin())
}

// Клиентские конфигурации
const clientConfig = {
    ...commonRootConfig,
    target: 'web',
    entry: {
        '../public/page-core': './helpers/PageCore.js'
    },
    module: {
        rules: [
            ...commonRulesConfig,
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    optimization: {
        minimize: false,
        runtimeChunk: {
            name: '../public/page-core'
        }/*,
        splitChunks: {
            cacheGroups: {
                default: false,
                ['../public/page-core']: {
                    test: /\.js?$/,
                    chunks: 'all',
                    minChunks: 2,
                    name: '../public/page-core',
                    enforce: true
                }
            }
        }*/
    },
    plugins: clientPluginsConfig
}

module.exports = [serverConfig, clientConfig]