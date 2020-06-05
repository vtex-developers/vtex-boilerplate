const path = require('path')
const entry = require('webpack-glob-entry')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const { outputHtml } = require('./utils/helpers')
const { 
	PATHS, 
	PAGES, 
	SUB_TEMPLATES,
	SHELVES_TEMPLATES,
	CUSTOM_TEMPLATES,
	STORE_NAME,
} = require('./utils/variables')

const config = {
	entry: entry(`${PATHS.pages}/**/*.js`, `${PATHS.global}/*.js`),
	output: {
		path: path.resolve(__dirname, PATHS.dist),
		filename: '[name].js'
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
			filename: '[name].css'
		}),
		new BrowserSyncPlugin({
      open: false,
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
          'sass-loader'
        ]
			},
		],
	},
}

module.exports = config