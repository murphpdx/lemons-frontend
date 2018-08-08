const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  // Entry points to the project
  entry: {
    main: [
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',
      './src/index.js',
      './src/assets/style.scss'
    ]
  },
  // Server Configuration options
  devServer: {
    contentBase: './',
    hot: true,
    historyApiFallback: true
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist'), // Path of output file
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}

module.exports = config
