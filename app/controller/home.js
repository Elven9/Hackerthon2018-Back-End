'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async getLocation() {
    this.ctx.body = {
      currentLocation: 'Taiwan',
      time: '2018/08/12',
      createAt: 'test.'
    }
  }
}

module.exports = HomeController;
