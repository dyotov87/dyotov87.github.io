const PROXY_CONFIG = [
  {
    context: ['*'],
    target: 'https://auth.eu.yuuvis.io/auth',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  }
  // {
  //   context: ['/viewer/**'],
  //   // target: 'http://127.0.0.1:9000',
  //   target: 'http://127.0.0.1:4300/',
  //   changeOrigin: true,
  //   secure: false,
  //   logLevel: 'debug'
  // }
];

module.exports = PROXY_CONFIG;
