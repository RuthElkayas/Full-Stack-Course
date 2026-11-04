// Exercise 6: Read Files in Parallel

const fs = require("fs");

async function readFilesParallel(files) {
  
  const contents = await Promise.all(
    files.map((file) => fs.promises.readFile(file, "utf8"))
  );

  contents.forEach((content) => console.log(content));
}

readFilesParallel(["a.txt", "b.txt"]).catch((err) => {
  console.log("Error reading files:", err.message);
});

// async function readFilesParallel(files){
//   const readPromises = files.map(file => fs.promises.readFile(file, "utf8"));
//   return Promise.all(readPromises);
// }

// readFilesParallel(["a.txt", "b.txt"])
//   .then(contents => {
//     contents.forEach(content => console.log(content));
//   })
//   .catch(err => {
//     console.log("Error reading files in parallel:", err.message);
//   }); 



  
