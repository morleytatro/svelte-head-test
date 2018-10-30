const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  target: 'node',
  externals: [new nodeExternals()],
  mode: process.env.NODE_ENV || 'development',
  entry: resolve(__dirname, '..', 'server', 'render'),
  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: 'ssr.bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: {
        loader: 'svelte-loader',
        options: {
          generate: 'ssr'
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.htmlx']
  }
}