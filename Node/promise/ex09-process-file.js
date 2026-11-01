// Exercise 9: Read File -> Count Words -> Save Result

const fs = require("fs");

function readFile(path) {
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

function writeFile(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

function countWords(text) {
  const trimmed = text.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}

function processFile(inputPath, outputPath) {
  return readFile(inputPath)
    .then((text) => countWords(text))
    .then((count) => writeFile(outputPath, `Word count: ${count}`));
}

processFile("input.txt", "result.txt")
  .then((result) => {
    console.log("Word count written to result.txt:");
    console.log(result);
  })
  .catch((err) => {
    console.log("Error processing file:", err.message);
  });
