const { CleanWebpackPlugin }= require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const templates = require('../../utils/getTemplates');

const plugins = [
    ...templates,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'assets/css/[name].css'
    }),
];

module.exports = plugins;