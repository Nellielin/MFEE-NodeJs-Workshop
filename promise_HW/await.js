const fs = require("fs");


function readFile(file, content) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, content, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
}

async function openFile() {
	try {
		let result = await readFile("test.txt", "utf-8");
		console.log(result);
	} catch (err) {
		console.error(`發生錯誤: ${err}`);
	}
}

openFile();