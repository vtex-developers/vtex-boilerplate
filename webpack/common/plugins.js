const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const {
  PATHS,
  PAGES,
  SUB_TEMPLATES,
  SHELVES_TEMPLATES,
  CUSTOM_TEMPLATES,
} = require('../utils/constants')
const { outputHtml } = require('../utils/helpers')
const env = require('../../env/app')

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(env)
  }),
  new OptimizeCSSAssets(),
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
]

module.exports = plugins