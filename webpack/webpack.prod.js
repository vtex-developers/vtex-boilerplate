const path = require('path')
const entry = require('webpack-glob-entry')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { output } = require('./utils/helpers')
const { PATHS } = require('./utils/constants')

const commonRules = require('./common/rules')
const commonPlugins = require('./common/plugins')

const config = {
	entry: entry(`${PATHS.pages}/**/*.js`, `${PATHS.global}/*.js`),
	output: {
		path: path.resolve(__dirname, PATHS.dist),
		filename: ({ chunk }) => output(chunk, 'js'),
	},
	plugins: [
		...commonPlugins,
    new MiniCssExtractPlugin({
			moduleFilename: chunk => output(chunk, 'css')
    }),
	],
	module: {
		rules: [
			...commonRules
		],
	},
}

module.exports = config