require("dotenv").load();
const path = require('path');
const webpack = require("webpack");
const config = require("./config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const jqueryPath = "jquery";

const jqueryPlugin = new webpack.ProvidePlugin({
  $: jqueryPath,
  "jQuery": jqueryPath,
  "window.jQuery": jqueryPath
});

const analyzer = new BundleAnalyzerPlugin({
  bundleDir: "analyze"
});

const compressionPlugin = new CompressionPlugin({
  test: /\.(ico|png|jpg|gif|woff(2)?|ttf|eot|svg|mp4|webm)$/
})

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[name].js'
  },
  plugins: [jqueryPlugin, analyzer, compressionPlugin],
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ["style-loader", "css-loader"], exclude: /node_modules/ },
      { test: /\.(ico|png|jpg|gif|woff(2)?|ttf|eot|svg|mp4|webm)$/, exclude: /node_modules/, use: [ { loader: 'file-loader', options: { 
        name: '[hash].[ext]', 
        outputPath: "assets/",
        publicPath: config.dist + "/assets",
      } } ] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'semantic-ui': path.join(__dirname, "node_modules", "semantic-ui-css", "semantic.js"),
    },
  }
};