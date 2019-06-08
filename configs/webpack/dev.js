// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const {
    resolve
} = require('path');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:3000', // bundle the client for webpack-dev-server and connect to the provided endpoint
        'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        './index.tsx' // the entry point of our app
    ],
    devServer: {
        hot: true, // enable HMR on the server
        historyApiFallback: true,
        disableHostCheck: true,
        port: 3000,
        host: "0.0.0.0",
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    ],
    module: {
        rules: [{
            enforce: "pre",
            loader: "tslint-loader",
            test: /\.tsx?$/,
            exclude : [resolve(__dirname, '../../src/services/trans/pdate')],
            options: {
                configFile: "tslint.json",
                emitErrors: true,
            }
        }]
    }
});
