const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    host: 'localhost',
    port: '8080',
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
});
