const path = require('path');
const entry = require('webpack-glob-entry')

const plugins = require('./webpack/dev/plugins');
const moduleConfig = require('./webpack/dev/module');

const config = {
	mode: 'development',
	entry: entry('./src/assets/js/common/*.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/[name].js'
	},
	plugins,
	module: {
		rules: [
			...moduleConfig
		]
	}
};

module.exports = config;