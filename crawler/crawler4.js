// await 版本
// 更好的參數設定
// 1. npm i axios
// 2. require
const fs = require("fs/promises");
const axios = require("axios");
const moment = require("moment");

// 開始抓資料
// 2330 台積電
// 2603 長榮


(async function main() {
    try {
        let stockNo = await fs.readFile("readStockNo.txt", "utf-8");
        
        let queryName = await axios.get("https://www.twse.com.tw/zh/api/codeQuery",{
            params:{
                query: stockNo,
            },
        });
        
        let results = queryName.data.suggestions
        let result = results[0];

        if(result === "(無符合之代碼或名稱)"){
            console.error(result);
            throw new Error(result);
        }
            let stockName = result.split("\t").pop();
            console.log("stockName:", stockName);
        

        let queryDate = moment().format('YYYYMMDD');
        console.log('queryDate', queryDate);
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

