const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[hash].[ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  }
};