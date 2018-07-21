const { resolve } = require('path');

module.exports = {
  name: 'client',
  target: 'web',
  mode: process.env.NODE_ENV || 'development',
  entry: resolve(__dirname, '..', 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: {
        loader: 'svelte-loader',
        options: {
          hydratable: true
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.html']
  }
}