const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const chokidar = require('chokidar');

const clientConfig = require('../webpack/client.config');
const serverConfig = require('../webpack/server.config');

const app = express();

app.get('/favicon.ico', (_, res) => res.sendStatus(204));

const compiler = webpack([clientConfig, serverConfig]);

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true
}));

app.use(webpackHotMiddleware(compiler.compilers[0]));

app.use((...args) => require('./app')(...args));

app.use(webpackHotServerMiddleware(compiler));

app.listen(3333, () => {
  console.log('listening on port 3333');
});

chokidar.watch(__dirname, {
  ignoreInitial: true,
  ignored: [
    __dirname + '/index.js',
    __dirname + '/render.js'
  ]
})
  .on('change', () => {
    Object.keys(require.cache)
      .filter(key => !key.includes('/node_modules/'))
      .forEach(key => delete require.cache[key]);
  });