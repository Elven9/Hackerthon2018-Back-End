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

  exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'hackerthon',
    host: 'hackerthon.mysql.database.azure.com',
    port: '3306',
    username: 'elvenlin@hackerthon',
    password: 'h9FcDwNjGnWtncw',
    baseDir: 'model'
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };

  return config;
};
