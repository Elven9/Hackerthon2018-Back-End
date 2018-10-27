'use strict';

const requestWeather = require('../lib/weather_request.js');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app, logger } = this;
    const { request, response } = ctx;

    const result = await requestWeather('v1/rest/datastore/F-C0032-001', "GET", {}, {
      limit: 10,
      locationName:'%E8%8A%B1%E8%93%AE%E7%B8%A3',
      sort: 'time'
    });
    
    response.body = result.data;
  }
}

module.exports = HomeController;
