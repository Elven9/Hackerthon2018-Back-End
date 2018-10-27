'use strict';

const requestWeather = require('../lib/weather_request.js');

const Controller = require('egg').Controller;

class WeatherController extends Controller {
  async index() {
    const { ctx, app, logger } = this;
    const { request, response } = ctx;

    console.log(request.body);

    const result = await requestWeather('v1/rest/datastore/F-C0032-001', "GET", request.body);
    // Code
    response.body = result.data;
  }
}

module.exports = WeatherController;
