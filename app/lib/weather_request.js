// 設定到中央氣象局 API 的 utility function

// Import Main function
const _request = require("../lib/main.js")._request;

// Import UTIL
const UTIL = require("../lib/util.js");

// Key Setting.
const _KEY = "CWB-BC9766BB-3B1E-4A57-8E9B-D73706D901B9";
const _TYPE = "JSON"
const _AUTHORIZATION = `Authorization=${_KEY}&format=${_TYPE}`;
const PATH = `https://opendata.cwb.gov.tw/api/`

// Main Function
const requestWeather = (path, method, condition) => {
  let options = UTIL._constructGetOption(condition);
  console.log(`${PATH}${path}?${_AUTHORIZATION}${options}`);
  return _request(`${PATH}${path}?${_AUTHORIZATION}${options}`, method, {}, {
    headers: {
      'Accept': 'application/json'
    }
  });
}

module.exports = requestWeather;