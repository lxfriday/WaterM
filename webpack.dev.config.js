/**
 * webpack config for development
 * @time 2018/08/27
 * @author lxfriday
 */
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: false,
    progress: true,
    port: 9000,
    inline: true,
    hot: true,
    historyApiFallback: true,
  },
});
