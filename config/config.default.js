'use strict';

module.exports = appInfo => {
  const config = exports = {};

  /**
   * CORS 插件設定
   * - egg-cors
   */
  config.cors = {
    origin: '*',
    allowHeaders: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE'
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
