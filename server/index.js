const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
require = require('esm')(module);

const clientConfig = require('../webpack/client.config');
const serverConfig = require('../webpack/server.config');

const app = express();

const compiler = webpack([clientConfig, serverConfig]);

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true
}));

app.use(webpackHotMiddleware(compiler.compilers[0]));

app.use(webpackHotServerMiddleware(compiler));

app.listen(3333, () => {
  console.log('listening on port 3333');
});