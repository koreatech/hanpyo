/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable func-names */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/graphql', {
      target: 'https://hanpyo-server.herokuapp.com',
      changeOrigin: true,
      logLevel: 'debug',
    }),
  );

  app.use(
    createProxyMiddleware('/api', {
      target: 'https://hanpyo-server.herokuapp.com',
      changeOrigin: true,
      logLevel: 'debug',
    }),
  );
};
