'use strict';

// Import 
const googlePlaceSearchRequest = require('../lib/google_place_request.js');

const Controller = require('egg').Controller;

class SearchController extends Controller {
  /*async findAddress() {
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;
    
    body.query = encodeURI(body.query);
    body.region = 'tw';
    body.location = `${body.location.latitude},${body.location.longitude}`;
    const result = await googlePlaceSearchRequest("textsearch", body);
    
    async function placeidToDetail(placeId){
      const detail = await googlePlaceSearchRequest("details",{ placeid: placeId});
      return detail;
    }

    const allResult = [];
    const limit = (result.data.results.length < 5)?result.data.results.length:5;

    for(var i = 0; i <limit; i++){
      const singleResult = await placeidToDetail(result.data.results[i].place_id);
      allResult.push(singleResult.data);
    }
    
    response.body = allResult;
  }

  async findSingleAddress(){
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;


    const result = await googlePlaceSearchRequest("details", body);
    const lat = result.data.result.geometry.location.lat;
    const lng = result.data.result.geometry.location.lng;
    const ans = { data:result.data, lat, lng };

    response.body = ans;
  }
  
  async findNearBy(){
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;
    
    body.location = `${body.location.latitude},${body.location.longitude}`;
    const result = await googlePlaceSearchRequest("nearbysearch", body);
    const allResult = [];
    const limit = result.data.results.length;
    for(var i = 0 ; i<limit; i++){
      allResult.push(result.data.results[i]);
    }
    response.body = allResult;
  }*/
  async usualTime(){
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;

    body.location = `${body.location.latitude},${body.location.longitude}`;
    const result = await googlePlaceSearchRequest("nearbysearch", body);
    const allResult = [];
    const limit = result.data.results.length;
    for(var i = 0 ; i<limit; i++){
      allResult.push(result.data.results[i]);
    }
    response.body = allResult;
  }

  async findPlaces(){//搜尋地點 跳出五個選項
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;

    body.query = encodeURI(body.query);
    body.region = 'tw';
    const result = await googlePlaceSearchRequest("textsearch", body);

    const allResult = [];
    const limit = (result.data.results.length < 5)?result.data.results.length:5;

    for(var i = 0; i <limit; i++){
      allResult.push(result.data.results[i]);
    }
    response.body = allResult;
  }

  async findNearBy(){
    const { ctx, app, logger } = this;
    const { request, response } = ctx;
    const { body } = request;
    

    body.query = encodeURI(body.query);
    body.region = 'tw';
    body.location = `${body.location.latitude},${body.location.longitude}`;
    const result = await googlePlaceSearchRequest("textsearch", body);

    const allResult = [];
    const limit = result.data.results.length;

    for(var i = 0; i <limit; i++){
      allResult.push(result.data.results[i]);
    }
    response.body = allResult;
  } 
}

module.exports = SearchController;


/*API使用方法
1. 平常
    以螢幕中央為點，沿比例尺顯示icon
    <<用法>>
    usualTime()
    <<in>>
    location : latitude, longtitude 以畫面為中心
    radius : 以比例尺
2. 地點
    跳出0~5個選項，點擊一個後，畫面移至選項位置，沿比例尺放出icon
    <<用法>>
    findPlaces() --> usualTime()
    <<in>>
      findPlaces :
        query : 地點
        region : "tw"
      usualTime : 
        location : latitude, longtitude 以地點
        radius : 以比例尺
3. 景物
    搜尋景物(ex 餐廳、學校)
    <<用法>>
    findNearBy() 
    <<in>>
    query : 關鍵字
    region : 'tw'
    location : 如果地點有查詢資料，以地點的location
               如果無查詢資料，以中心的location
    radius : 以比例尺*/
