'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540137642708_4586';

  // add your config here
  config.middleware = [];

  /**
   * CORS 插件設定
   * - egg-cors
   */
  config.cors = {
    origin: 'http://localhost:8080',
    allowHeaders: 'content-type',
    allowMethods: 'GET,POST'
  }

  /**
   * CSRF 攻擊防護設定
   */
  config.security = {
    csrf: {
      ignore: ctx => true
    }
  }

  return config;
};
