/**
 * webpack config for production
 * @time 2018/08/27
 * @author lxfriday
 */
const webpackMerge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
});
