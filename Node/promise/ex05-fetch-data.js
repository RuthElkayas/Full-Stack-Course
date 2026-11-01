// Exercise 5: Get Data from Website

const https = require("https");

function fetchData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

fetchData(url)
  .then((data) => {
    console.log(`Received data from ${url}:`);
    console.log(data);
  })
  .catch((err) => {
    console.log("Request failed:", err.message);
  });
