// Exercise 3: Get File Size

const fs = require("fs");

async function getFileSize(path) {
  const stats = await fs.promises.stat(path);
  return stats.size;
}

getFileSize("./test.txt")
  .then(console.log)
  .catch((err) => {
    console.log("Error getting file size:", err.message);
  });

 