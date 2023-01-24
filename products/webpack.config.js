const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  // this tells webpack to apply the compiled JS file
  // to the index.html file
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}