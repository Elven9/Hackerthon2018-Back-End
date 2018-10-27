// 引入 axios
const axios = require('axios');

// 設定基礎 request utility function
const _API = {
  _request: (path, method, payload, axiosConfig) => {
    return new Promise((res, rej) => {
      // Error Detect.
      // Path
      if (typeof path === "undefined") {
        rej({
          message: "Path not provided"
        });
        return ;
      }
      
      // method
      if (typeof method === "undefined") {
        rej({
          message: "Method not provided"
        });
        return ;
      }

      // Process Axios
      if (method === "GET") {
        axios.get(path, axiosConfig).then(response => {
          res(response);
        }).catch(err => {
          rej(err);
        })
      } else if (method === "POST") {
        if (typeof payload === "undefined") {
          rej({
            message: "Select POST Method But Payload not proveded."
          })
          return ;
        }
        axios.post(path, payload, axiosConfig).then(response => {
          res(response);
        }).catch(err => {
          rej(err);
        })
      } else {
        rej({
          message: "Method Selection Fault",
          supportMethod: ["GET", "POST"]
        });
      }
    })
  }
}
module.exports = _API;