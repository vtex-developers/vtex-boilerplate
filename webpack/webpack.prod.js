const path = require('path')
const fs = require('fs')
const entry = require('webpack-glob-entry')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { outputFilename } = require('./helpers')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	views: path.join(__dirname, '../src/views'),
	viewsOutput: path.join(__dirname, '../dist/views'),
	common: path.join(__dirname, '../src/common'),
	commonOutput: path.join(__dirname, '../dist/common'),
}
const VIEWS = fs.readdirSync(`${PATHS.views}/`)

const config = {
	entry: entry(`${PATHS.views}/**/*.js`, `${PATHS.common}/*.js`),
	output: {
		path: path.resolve(__dirname, PATHS.dist),
		filename: ({ chunk: { entryModule } }) => outputFilename(entryModule, 'js'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
						loader: 'babel-loader'
				},
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				query: { pretty: false },
			},
			{
				test: /\.scss$/,
				use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader', 
          'sass-loader'
        ]
			},
		],
	},
	plugins: [
		...VIEWS.map(page => new HtmlWebpackPlugin({
			template: `${PATHS.views}/${page}/index.pug`,
			filename: `${PATHS.viewsOutput}/${page}/index.html`,
			inject: false,
		})),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
			moduleFilename: ({ entryModule }) => outputFilename(entryModule, 'css')
    }),
		new OptimizeCSSAssets(),
	],
}

module.exports = config