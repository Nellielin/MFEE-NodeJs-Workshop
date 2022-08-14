// await 版本
// 更好的參數設定
// 1. npm i axios
// 2. require
const fs = require("fs");
const axios = require("axios");
const moment = require("moment")

// 開始抓資料
// 2330 台積電
// 2603 長榮

function readFile(file, content) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, content, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
};

(async function main() {
    try {
        let stockNo = await readFile("readStockNo.txt", "utf-8");
        let queryDate = moment().format('YYYY/MM/DD');
        let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", { 
     params: {
     response: 'json',
     stockNo: stockNo,
     date: queryDate,
   },
 });
 console.log(queryDate);
 console.log(response.data);

    } catch (e) {
        console.error(e);
    }
})();

