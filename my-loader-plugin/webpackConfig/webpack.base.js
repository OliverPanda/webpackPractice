const path = require('path')
const FilePlugin = require('../plugins/file-list-plugin')
const CleanPlugin = require('../plugins/my-clean-plugin')
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.[hash:5].js'
  },
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, '../loaders/babel-loader.js')
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: path.resolve(__dirname, '../loaders/style-loader/style-loader.js')
          },
          {
            loader: path.resolve(__dirname, '../loaders/css-loader/css-loader.js')
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|eot|ttf|woff)$/,
        use: [
          {
            loader: path.resolve(__dirname, '../loaders/file-loader.js')
            // loader: path.resolve(__dirname, '../loaders/url-loader.js')
          }
        ]
      }
    ]
  },
  plugins: [
    new FilePlugin(),
    new CleanPlugin(['./'])
  ]
}