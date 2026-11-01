// Exercise 5: System Free Memory Logger
const os = require("os");

const MAX_LOGS = 5;
let logCount = 0;

const intervalId = setInterval(() => {
  const freePercent = (os.freemem() / os.totalmem()) * 100;
  console.log(`Free Memory: ${freePercent.toFixed(2)}%`);
  logCount++;

  if (logCount === MAX_LOGS) {
    clearInterval(intervalId);
    console.log("Memory logging complete.");
  }
}, 2000);
