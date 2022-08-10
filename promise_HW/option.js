const fs = require('fs');  
const fsPromises = fs.promises;

async function openFile() {   
    try{   
        const text = await fsPromises.readFile('test.txt', 'utf-8');   
        console.log(text) 
    }
    catch(err){
        console.error('發生錯誤:', err)
    }
}

openFile()