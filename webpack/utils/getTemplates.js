const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const templates = new Array;
const folder = 'src/views/common/template/';
fs.readdirSync(folder).map((files) => {
	if (files.match(/\.pug$/)){
		const fileName = files.substring(0, files.length -4);
		templates.push(
			new HtmlWebpackPlugin({
				template: `${folder}/${fileName}.pug`,
				filename: `views/html-templates/${fileName}.html`,
				inject: false,
			})
		);
	}
});

module.exports = templates;