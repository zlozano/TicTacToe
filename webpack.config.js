var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  devtool: 'source-map',
  module: {
    
    rules: [
      {
        test: /\.css$/,
        include: __dirname + '/app/styles',
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig, new ExtractTextPlugin('styles.css')]
};
