// index.js
const core = require("@actions/core");

try {
  const nameToGreet = process.argv[2] || "World";
  console.log(`Hello ${nameToGreet}!`);

  const time = new Date().toISOString();
  console.log(`The time is ${time}`);

  // Set the output
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
