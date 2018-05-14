const path = require('path');
const webpack = require("webpack");

const jqueryPath = path.resolve(__dirname, 'src/jquery-3.3.1.min.js');

const jqueryPlugin = new webpack.ProvidePlugin({
  $: jqueryPath,
  jQuery: jqueryPath,
  "window.jQuery": jqueryPath
})

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index/src/script.js'),
    shop: path.resolve(__dirname, 'src/shop/src/script.js'),
    catalog: path.resolve(__dirname, 'src/catalog/src/script.js'),
    dostavka: path.resolve(__dirname, 'src/dostavka/src/script.js'),
  },
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'app.[name].js'
  },
  plugins: [jqueryPlugin],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ["style-loader", "css-loader"], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};