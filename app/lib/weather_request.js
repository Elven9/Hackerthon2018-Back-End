// 設定到中央氣象局 API 的 utility function

// Import Main function
const _request = require("../lib/main.js")._request;

const _KEY = "CWB-BC9766BB-3B1E-4A57-8E9B-D73706D901B9";
const _TYPE = "JSON"
const _AUTHORIZATION = `Authorization=${_KEY}&format=${_TYPE}`;
const PATH = `https://opendata.cwb.gov.tw/api/`

// Main Function
const requestWeather = (path, method, condition) => {
  let options = _constructGetOption(condition);
  return _request(`${PATH}${path}?${_AUTHORIZATION}${options}`, method, {}, {
    headers: {
      'Accept': 'application/json'
    }
  });
}

// Utility Function.
const _constructGetOption = (condition) => {
  // Construct condition to get option.
  let result = ""
  for (let i in condition) {
    result += `&${i}=${condition[i]}`;
  }
  return result;
}

module.exports = requestWeather;