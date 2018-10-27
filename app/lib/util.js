// 定義 helper 韓式

const UTIL = {
  _constructGetOption: (condition) => {
    // Construct condition to get option.
    let result = ""
    for (let i in condition) {
      result += `&${i}=${condition[i]}`;
    }
    return result;
  }
}

module.exports = UTIL;