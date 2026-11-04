// Exercise 9: Merge Text Files

const fs = require("fs");

async function mergeFiles(files, output) {
  const contents = await Promise.all(
    files.map((file) => fs.promises.readFile(file, "utf8"))
  );

  await fs.promises.writeFile(output, contents.join("\n"));
}

mergeFiles(["a.txt", "b.txt"], "merged.txt")
  .then(() => {
    console.log("Files merged into merged.txt");
  })
  .catch((err) => {
    console.log("Error merging files:", err.message);
  });

