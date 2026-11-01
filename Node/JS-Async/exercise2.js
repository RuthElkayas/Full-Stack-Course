// Exercise 2: Directory Files Only
const fs = require("fs");
const path = require("path");

const directoryPath = process.argv[2] || __dirname;

fs.readdir(directoryPath, (readErr, items) => {
  if (readErr) {
    console.error("Error reading directory:", readErr.message);
    return;
  }

  items.forEach((item) => {
    const itemPath = path.join(directoryPath, item);

    fs.lstat(itemPath, (statErr, stats) => {
      if (statErr) {
        console.error(`Error checking ${item}:`, statErr.message);
        return;
      }

      if (stats.isFile()) {
        console.log(`File: ${item}`);
      }
    });
  });
});
