const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './server/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devtool: 'source-map'
}


module.exports = config;