const PROXY_CONFIG = [
  {
    context: ['/api/**', '/api-web/**', '/predict-api/**', '/tenant/**', '/login**', '/oauth/**', '/auth/**', '/logout**'],
    //target: 'http://127.0.0.1:4300/',
    target: 'https://auth.eu.yuuvis.io/auth/realms/itelligence1/',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/viewer/**'],
    // target: 'http://127.0.0.1:9000',
    //target: 'http://127.0.0.1:4300/',
    target: 'https://auth.eu.yuuvis.io/auth/realms/itelligence1/',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
