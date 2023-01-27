const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
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
      name: 'cart',
      // fileName contains a list of files that are available to import
      // from this project
      filename: 'remoteEntry.js',
      // give the /src/index.js file an alias name
      exposes: {
        './CartShow': './src/bootstrap',
      },
      // if another project already imported faker
      // then don't import it again and use the existing one
      shared: ['faker'],
      // ** dif way to import shared modules **
      // singleton: true means that only one instance of faker
      // will be used in the entire application
      // shared: {
      //   faker: {
      //     singleton: true,
      //   }
      // }
    }),
  ],
}