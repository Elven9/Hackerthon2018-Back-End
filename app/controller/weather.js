'use strict';

const requestWeather = require('../lib/weather_request.js');

const Controller = require('egg').Controller;

class WeatherController extends Controller {
  async index() {
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;
    //Body 
    
    body.startTime = body.startTime.replace(/:/g,"%3A");
    body.locationName = encodeURI(body.locationName);
    
    const result = await requestWeather('v1/rest/datastore/F-C0032-001', "GET", body);
    const gave = {
      icon: 0, //icon from 0 to 4   -----> 0 for 晴天, 1 for 多雲, 2 for 陰天, 3 for 小雨, 4 for 大雨
      minT: 0,
      maxT: 0
    };
    switch(result.data.records.location[0].weatherElement[0].time[0].parameter.parameterValue){
      case 1 :
      case 8 :
      case 43:
      case 46:
        gave.icon = 0;
        break;
      case 2 :
      case 7 :
      case 45:
        gave.icon = 1;
        break;
      case 3 :
      case 5 :
      case 6 :
      case 44:
        gave.icon = 2;
        break;
      case 4 :
      case 24:
      case 26:
      case 49:
      case 57:
      case 60:
        gave.icon = 3;
        break;
      case 12:
      case 13:
      case 17:
      case 18:
      case 31:
      case 34:
      case 36:
      case 58:
      case 59:
        gave.icon = 4;
        break;
    }
    gave.minT = result.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    gave.maxT = result.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    // Code
    response.body = gave;
  }

  async test() {
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;
    //Body 

    response.body = "yM16Ulrhgj64zHQiGjhfutRD6NFDsf6rZHXp1PoKZ2U.0P9oyRWQQXCDILJwFtWYL8eKuX5mMFuoMjJMWDoLqzk"
    response.type = "text/plain"
  }
}

module.exports = WeatherController;
