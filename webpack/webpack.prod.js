const path = require('path')
const entry = require('webpack-glob-entry')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { output, outputHtml } = require('./utils/helpers')

const { 
	PATHS, 
	PAGES, 
	SUB_TEMPLATES,
	SHELVES_TEMPLATES,
	CUSTOM_TEMPLATES,
} = require('./utils/variables')

const config = {
	entry: entry(`${PATHS.pages}/**/*.js`, `${PATHS.global}/*.js`),
	output: {
		path: path.resolve(__dirname, PATHS.dist),
		filename: ({ chunk }) => output(chunk, 'js'),
	},
	plugins: [
		...PAGES.map(page => new HtmlWebpackPlugin({
			template: `${PATHS.pages}/${page}/index.pug`,
			filename: `${PATHS.pagesDist}/${page}/index.html`,
			inject: false,
		})),
		...SUB_TEMPLATES.map(template => new HtmlWebpackPlugin({
			template: `${PATHS.templates}/Sub/${template}`,
			filename: `${PATHS.templatesDist}/Sub/${outputHtml(template)}.html`,
			inject: false,
		})),
		...SHELVES_TEMPLATES.map(template => new HtmlWebpackPlugin({
			template: `${PATHS.templates}/Shelves/${template}`,
			filename: `${PATHS.templatesDist}/Shelves/${outputHtml(template)}.html`,
			inject: false,
		})),
		...CUSTOM_TEMPLATES.map(template => new HtmlWebpackPlugin({
			template: `${PATHS.templates}/Custom/${template}`,
			filename: `${PATHS.templatesDist}/Custom/${outputHtml(template)}.html`,
			inject: false,
		})),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
			moduleFilename: chunk => output(chunk, 'css')
    }),
		new OptimizeCSSAssets(),
	],
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
				query: { pretty: true },
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
}

module.exports = config