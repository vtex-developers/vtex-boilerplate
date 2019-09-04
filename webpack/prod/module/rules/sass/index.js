const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassConfig = {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
};


module.exports = sassConfig;