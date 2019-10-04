const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ]
};