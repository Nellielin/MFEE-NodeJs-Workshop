// 用 axios 去目標 api 抓資料
// 1. npm i axios
// 2. require
const axios = require("axios");

axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220813&stockNo=2330&_=1660378514253")
  .then((response) => {
    console.log(response);
    responseDom.innerHTML = `axios response: ${response.data}`;
  })
  .catch((error) => {
    console.error(error);
  });
