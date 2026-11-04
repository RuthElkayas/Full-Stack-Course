// Exercise 7: Check If File Exists with Promise

const fs = require("fs");

function fileExists(path) {
  return new Promise((resolve) => {
    fs.access(path, (err) => {
      resolve(!err);
    });
  });
}

fileExists("./test.txt").then(console.log); // true
fileExists("./missing.txt").then(console.log); // false
