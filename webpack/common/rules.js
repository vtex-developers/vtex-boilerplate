const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PATHS } = require('../utils/constants')

const rules = [
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
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
      {
        loader: 'sass-loader',
        options: {
          prependData: `@import '${PATHS.styles}/settings/index.scss';`
        }
      }
    ]
  },
]


module.exports = rules