const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = [
  'axios', 'react', 'react-dom', 'react-redux',
  'react-router-dom', 'redux', 'redux-thunk',
  'react-bootstrap'
];

const config = {
  entry: {
    bundle: ['babel-polyfill', './client/index.js'],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": "http://127.0.0.1:4000",
    }
  },
  plugins: [
    new ExtractTextPlugin("[name].[contenthash].css"),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  )
}

module.exports = config;
