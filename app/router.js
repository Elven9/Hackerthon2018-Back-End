'use strict';

const axios = require("axios");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // Add Axios to global.
  app.axios = axios;

  // Search
  router.post('/search/findNearBy', controller.search.findNearBy);
  router.post('/search/findPlaces', controller.search.findPlaces);
  router.post('/search/usualTime', controller.search.usualTime);
  // Weather
  router.post('/weather', controller.weather.index);

  router.get('.well-known/acme-challenge/tn2B20Z7SsEwFtRbq5DBz-IeDWucrAgGvDTusFtgwMk', controller.weather.test);
  
};
