// Exercise 1: File Reader with Stats
const fs = require("fs");
const path = require("path");

const filePath = process.argv[2] || path.join(__dirname, "sample.txt");

fs.readFile(filePath, "utf8", (readErr, content) => {
  if (readErr) {
    console.error("Error reading file:", readErr.message);
    return;
  }

  fs.stat(filePath, (statErr, stats) => {
    if (statErr) {
      console.error("Error getting file stats:", statErr.message);
      return;
    }

    console.log("File Content:");
    console.log(content);
    console.log();
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created At: ${stats.birthtime.toISOString()}`);
  });
});
