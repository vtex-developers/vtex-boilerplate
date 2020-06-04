const path = require('path')
const entry = require('webpack-glob-entry')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const STORE_NAME = ''

const PATHS = {
	dist: path.join(__dirname, '../dist'),
	pages: path.join(__dirname, '../src/pages'),
	common: path.join(__dirname, '../src/common'),
}

const config = {
	entry: entry(`${PATHS.pages}/**/*.js`, `${PATHS.common}/*.js`),
	output: {
		path: path.resolve(__dirname, PATHS.dist),
		filename: '[name].js'
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
				test: /\.scss$/,
				use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'
        ]
			},
		],
	},
	plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
			new BrowserSyncPlugin({
      open: 'external',
      https: true,
      ui: false,
      host: `${STORE_NAME}.vtexlocal.com.br`,
      startpath: '/admin/login/',
      proxy: `https://${STORE_NAME}.vtexcommercestable.com.br`,
      serveStatic: [
        {
          route: '/arquivos',
          dir: PATHS.dist,
        },
      ],
    }),
	],
}

module.exports = config