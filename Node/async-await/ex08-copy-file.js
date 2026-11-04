// Exercise 8: Copy File with Promises

const fs = require("fs");

async function copyFile(src, dest) {
  const data = await fs.promises.readFile(src);
  await fs.promises.writeFile(dest, data);
}

copyFile("a.txt", "copy.txt")
  .then(() => {
    console.log("File copied to copy.txt");
  })
  .catch((err) => {
    console.log("Error copying file:", err.message);
  });

 