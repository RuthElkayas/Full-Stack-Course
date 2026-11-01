// Exercise 8: Say 3 Things, One by One

function sayAfter(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

function chainedGreetings() {
  return sayAfter("Hi!", 1000)
    .then(() => sayAfter("How are you?", 2000))
    .then(() => sayAfter("Goodbye!", 1000));
}

chainedGreetings();
