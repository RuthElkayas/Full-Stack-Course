// Exercise 6: Wait for 3 Promises Together

function waitAll() {
  const first = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 1000);
  });

  const second = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 2000);
  });

  const third = new Promise((resolve) => {
    setTimeout(() => resolve("Third"), 3000);
  });

  return Promise.all([first, second, third]);
}

waitAll().then((results) => {
  console.log(results);
});
