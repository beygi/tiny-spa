// production config
const merge = require('webpack-merge');
const {
    resolve
} = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = require('./common');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const isAnalysis = process.argv.indexOf("-a") >= 0;

module.exports = smp.wrap(merge(commonConfig, {
    mode: 'production',
    entry: ['./index.tsx'],
    output: {
        filename: 'js/[name]-[chunkhash].min.js',
        path: resolve(__dirname, '../../dist'),
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [
        new BundleAnalyzerPlugin({analyzerMode: !isAnalysis ? 'disable' : 'server'}),
    ],
}));
