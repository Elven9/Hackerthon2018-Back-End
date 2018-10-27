'use strict';

const Controller = require('egg').Controller;

class LocationController extends Controller {
  async addFavoriteLocation() {
    const { ctx, app, logger } = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;
    const { email, password, name } = body;

    global_dataStructure.favoriteLocationList.push(body);

    response.body = {
      success: true
    }
  }
  async getCurrentListOfLocation() {
    const { ctx, app, logger} = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;

    response.body = global_dataStructure.favoriteLocationList;
  }
  async removeFavoriteLocation() {
    const { ctx, app, logger } = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;
    const { email, password } = body;

    
  }
}

module.exports = LocationController;
