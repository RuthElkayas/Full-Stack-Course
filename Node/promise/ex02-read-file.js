// Exercise 2: Read a File with Promise

const fs = require("fs");

function readFileContent(path) {
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

readFileContent("file.txt")
  .then((content) => {
    console.log("Content of file.txt:");
    console.log(content);
  })
  .catch((err) => {
    console.log("Error reading file:", err.message);
  });
