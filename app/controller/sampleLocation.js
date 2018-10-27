'use strict';

const Controller = require('egg').Controller;

class sampleLocationController extends Controller {
  async addSample() {
    const { ctx, app, logger } = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;
    const { email, password, name } = body;

    global_dataStructure.samplePoints.push(body);

    response.body = {
      success: true
    }
  }
  async getAllSample() {
    const { ctx, app, logger} = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;

    response.body = global_dataStructure.samplePoint;
  }
  async removeFavoriteLocation() {
    const { ctx, app, logger } = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;
    const { email, password } = body;

    
  }
}

module.exports = sampleLocationController;
