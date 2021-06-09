const { resolve } = require('path');
const webpack = require('webpack');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  name: 'client',
  target: 'web',
  mode: process.env.NODE_ENV || 'development',
  entry: [
    DEV && 'webpack-hot-middleware/client',
    resolve(__dirname, '..', 'src', 'index.js')
  ]
    .filter(Boolean),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  module: {
    rules: [{
      test: /\.svelte$/,
      use: {
        loader: 'svelte-loader',
        options: {
          compilerOptions: {
            dev: DEV,
            hydratable: true,
          },
          hotReload: DEV,
          hotOptions: {
            preserveLocalState: true
          }
        }
      }
    }]
  },
  plugins: [DEV && new webpack.HotModuleReplacementPlugin()]
    .filter(Boolean),
  resolve: {
    extensions: ['.js', '.json', '.svelte']
  }
}