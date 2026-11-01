// Exercise 4: Random Line from File
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "quotes.txt");

fs.readFile(filePath, "utf8", (err, content) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  const lines = content
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "");

  if (lines.length === 0) {
    console.log("The file has no lines to choose from.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * lines.length);
  console.log(`Random Line: ${lines[randomIndex]}`);
});
