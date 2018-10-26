const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(env, argv) {
  const isDevMode = argv.mode !== 'production'

  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')}),
      new MiniCssExtractPlugin({filename: 'bundle.css'})
    ]
  };
}
