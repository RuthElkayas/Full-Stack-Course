// Exercise 1: Read File with Promise

const fs = require("fs");

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("./test.txt")
  .then((data) => console.log(data))
  .catch((err) => {
    console.log("Error reading file:", err.message);
  });


