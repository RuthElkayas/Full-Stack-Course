// Exercise 4: List Files in Directory

const fs = require("fs");

// async function listFiles(dir) {
//   
//   const entries = await fs.promises.readdir(dir, { withFileTypes: true });
//   return entries.filter((entry) => entry.isFile()).map((entry) => entry.name);
// }
async function listFiles(dir) {
    return await fs.promises.readdir(dir);
  }

listFiles("./")
  .then(console.log)
  .catch((err) => {
    console.log("Error listing files:", err.message);
  });

