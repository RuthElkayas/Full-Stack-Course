// Exercise 7: Check if File Exists

const fs = require("fs");

function checkFileExists(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
}

checkFileExists("file.txt")
  .then((exists) => {
    console.log("File exists:", exists);
  })
  .catch((exists) => {
    console.log("File exists:", exists);
  });
