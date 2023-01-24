const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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
    // this tells webpack to expose the compiled JS file
    // so our container can import it
    new ModuleFederationPlugin({
      name: 'products',
      // fileName contains a list of files that are available to import
      // from this project
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index',
      },
    }),
  ],
}