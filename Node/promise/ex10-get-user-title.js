// Exercise 10: Get Data -> Parse JSON -> Show Title

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

function getUserTitle(userId) {
  return fetchData(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then((data) => JSON.parse(data))
    .then((todo) => {
      console.log(`User ${userId}'s title: ${todo.title}`);
    })
    .catch((err) => {
      console.log("Error:", err.message);
    });
}

getUserTitle(4);
