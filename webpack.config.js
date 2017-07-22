const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
      }
    ]
  },
  devServer: {
    inline:true,
    port: 8081
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    compress: true,
  })],
};