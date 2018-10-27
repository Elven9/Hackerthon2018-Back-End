'use strict';

// Import 
const googlePlaceSearchRequest = require('../lib/google_place_request.js');

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async index() {
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;
    
    const result = await googlePlaceSearchRequest("findplacefromtext", {
      input: "Taiwan",
      inputtype: "textquery"
    })

    response.body = result.data;
  }
}

module.exports = SearchController;
