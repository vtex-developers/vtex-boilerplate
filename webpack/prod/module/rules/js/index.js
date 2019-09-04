const jsConfig = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
};
module.exports = jsConfig;