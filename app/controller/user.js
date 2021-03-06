'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, app, logger } = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;
    const { email, password, name } = body;

    if (typeof email === "undefined" || typeof password === "undefined") ctx.throw(400, 'Bad request: inssuficient parameters');

    global_dataStructure.currentUser = {
      email: email,
      password: password,
      name: name,
      islogin: false
    }

    response.body = {
      success: true
    }
  }
  async getCurrentUser() {
    const { ctx, app, logger} = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;

    response.body = global_dataStructure.currentUser;
  }
  async logout() {
    const { ctx, app, logger } = this;
    const { global_dataStructure } = app;
    const { request, response } = ctx;
    const { body } = request;
    const { email, password } = body;

    global_dataStructure.currentUser = {
      email: "",
      password: "",
      name: "",
      islogin: false
    }

    response.body = {
      success: true
    }
  }
}

module.exports = UserController;
