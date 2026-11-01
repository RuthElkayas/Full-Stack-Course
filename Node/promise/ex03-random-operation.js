// Exercise 3: Random Success or Failure

function randomOperation() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve("Success!");
    } else {
      reject("Failure!");
    }
  });
}

randomOperation()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
