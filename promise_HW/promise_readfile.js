const fs = require("fs");

let readfile = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, content, (err, data) => {
      if (err) {
        return reject(`發生錯誤： ${err}`);
      }
      resolve(`${file}: ${data}`);
    });
  });
};

readfile("test.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));