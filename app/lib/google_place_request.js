// 設定到 google place api 的 request

// Import request function
const _request = require("../lib/main.js")._request;

// Import UTIL
const UTIL = require("../lib/util.js");

// Key Setting.
const _KEY = "AIzaSyC_Oa7zUiLskoWL68EYMZoEXdC5k1o-WSg";
const _PROTOCOL = "https";
const _BASEPATH = "maps.googleapis.com/maps/api/place"
const PATH = `${_PROTOCOL}://${_BASEPATH}/`;

// Main Function
const googlePlaceSearchRequest = (type, condition) => {
  let options = UTIL._constructGetOption(condition);
  return _request(`${PATH}${type}/json?key=${_KEY}${options}`, "GET", {}, options);
}

module.exports = googlePlaceSearchRequest;
