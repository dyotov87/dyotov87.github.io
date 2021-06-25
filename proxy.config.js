const PROXY_CONFIG = [
  {
    context: ['/api/**', '/api-web/**', '/predict-api/**', '/tenant/**', '/login**', '/oauth/**', '/auth/**', '/logout**'],
    target: 'https://auth.eu.yuuvis.io/auth',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/viewer/**'],
    // target: 'http://127.0.0.1:9000',
    target: 'https://auth.eu.yuuvis.io/auth',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
