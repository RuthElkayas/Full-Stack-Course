//Exercise 2: Async Read File

const fs = require("fs");

async function readFileAsync(path) {
  return await fs.promises.readFile(path, "utf8");
}

readFileAsync("./test.txt")
  .then((data) => console.log(data))
  .catch((err) => {
    console.log("Error reading file:", err.message);
  });

 

