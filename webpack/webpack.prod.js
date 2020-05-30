const path = require('path');
const fs = require('fs');
const entry = require('webpack-glob-entry');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	pages: path.join(__dirname, '../src/pages'),
	pagesOutput: path.join(__dirname, '../dist/pages'),
	common: path.join(__dirname, '../src/common'),
	commonOutput: path.join(__dirname, '../dist/common'),
}
const PAGES = fs.readdirSync(`${PATHS.pages}/`)

const outputFilename = (entry, output) => {
	return entry.resource.includes('common') 
		? `common/[name]/[name].${output}`
		: `pages/[name]/[name].${output}`
}

const config = {
	entry: entry(`${PATHS.pages}/**/*.js`, `${PATHS.common}/*.js`),
	output: {
		path: path.resolve(__dirname, PATHS.dist),
		filename: ({ chunk: { entryModule }}) => outputFilename(entryModule, 'js'),
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
		...PAGES.map(page => new HtmlWebpackPlugin({
			template: `${PATHS.pages}/${page}/index.pug`,
			filename: `${PATHS.pagesOutput}/${page}/index.html`,
			inject: false,
		})),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
			moduleFilename: ({ entryModule }) => outputFilename(entryModule, 'css')
    }),
		new OptimizeCSSAssets(),
	],
};

module.exports = config;