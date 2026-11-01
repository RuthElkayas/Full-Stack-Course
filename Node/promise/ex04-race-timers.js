// Exercise 4: Timer Race - Which is Faster?

function raceTimers() {
  const timerA = new Promise((resolve) => {
    setTimeout(() => resolve("Timer A finished!"), 2000);
  });

  const timerB = new Promise((resolve) => {
    setTimeout(() => resolve("Timer B finished!"), 3000);
  });

  return Promise.race([timerA, timerB]);
}

raceTimers().then((message) => {
  console.log(message);
});
