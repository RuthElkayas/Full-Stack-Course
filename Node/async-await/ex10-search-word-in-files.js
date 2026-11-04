// Exercise 10: Search Word in All Files

const fs = require("fs");
const path = require("path");

async function searchWordInFiles(dir, word) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const fileNames = entries.filter((entry) => entry.isFile()).map((entry) => entry.name);

  for (const fileName of fileNames) {
    const content = await fs.promises.readFile(path.join(dir, fileName), "utf8");

    if (content.includes(word)) {
      console.log(fileName);
    }
  }
}

searchWordInFiles("./texts", "important").catch((err) => {
  console.log("Error searching files:", err.message);
});


