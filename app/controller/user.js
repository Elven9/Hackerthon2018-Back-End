'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, app, logger } = this;
    const { request, response, model } = ctx;
    const { body } = request;
    const { email, password } = body;
    const { Users } = model;

    if (typeof email === "undefined" || typeof password === "undefined") ctx.throw(400, 'Bad request: inssuficient parameters');

    // Check if user exist in db.
    const user = Users.findAll({
      where: {
        email
      }
    });

    console.log(user);
  }
}

module.exports = UserController;
