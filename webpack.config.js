const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: false,
    progress: true,
    port: 9000,
    inline: true,
  },
};

// 当资源发生改变，以下三种方式都会生成新的bundle，但是又有区别：

// // 1. 不会刷新浏览器
// $ webpack-dev-server
// //2. 刷新浏览器
// $ webpack-dev-server --inline
// //3. 重新加载改变的部分，HRM失败则刷新页面
// $ webpack-dev-server  --inline --hot
