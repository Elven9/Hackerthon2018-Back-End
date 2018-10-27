'use strict';

const axios = require("axios");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // Add Axios to global.
  app.axios = axios;

  router.get('/', controller.home.index);

  // Weather
  router.post('/weather/', controller.weather.index);
};
