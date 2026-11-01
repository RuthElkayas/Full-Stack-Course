// Exercise 1: Say Hello After a Delay

function delayedGreet(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, delay);
  });
}

delayedGreet("Alice", 2000).then((message) => {
  console.log(message);
});
