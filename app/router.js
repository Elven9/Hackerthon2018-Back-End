'use strict';

const axios = require("axios");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // Add Axios to global.
  app.axios = axios;

  app.global_dataStructure = {
    currentUser: {},
    favoriteLocationList: [],
    samplePoints: []
  }

  // Search
  router.post('/search/findNearBy', controller.search.findNearBy);
  router.post('/search/findPlaces', controller.search.findPlaces);
  router.post('/search/usualTime', controller.search.usualTime);

  // Weather
  router.post('/weather', controller.weather.index);

  // User
  router.post('/user/login', controller.user.login);
  router.get('/user/getCurrentUser', controller.user.getCurrentUser);
  router.get('/user/logout', controller.user.logout);

  // Location
  router.post('/location/addFavoriteLocation', controller.location.addFavoriteLocation);
  router.get('/location/getCurrentListOfLocation', controller.location.getCurrentListOfLocation);

  // Sample Point
  router.post('/sampleLocation/addSample', controller.sampleLocation.addSample)
  router.get('/sampleLocation/getAllSample', controller.sampleLocation.getAllSample)

};
