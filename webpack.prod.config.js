const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    main: [
      './src/index.js',
      './src/assets/style.scss'
    ]
  },
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: path.resolve(__dirname, 'dist'), // Path of output file
    filename: 'app.js' // Name of output file
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      filename: 'index.html',
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
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
}

module.exports = config
