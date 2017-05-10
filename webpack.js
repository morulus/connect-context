const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "index.js",
    library: "ConnectContext",
    libraryTarget: "umd"
  },
  externals: [
    {
      "react": true,
      "react-redux": true,
      "redux": true,
      "prop-types": true,
      "invariant": true
    }
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          },
        }
      }
    ]
  }
};
