// index.js
const core = require("@actions/core");

// The first two elements of process.argv are always:
// The path to the Node.js executable (e.g., /usr/local/bin/node).
// The path to the script being executed (e.g., /path/to/your/script.js).

try {
  const apiKey = process.env.MY_SECRET_API_KEY;
  console.log(`Secret: ${apiKey}`);

  const nameToGreet = process.argv[2] || "World";
  console.log(`Hello ${nameToGreet}!`);

  const time = new Date().toISOString();
  console.log(`The time is ${time}`);

  // Set the output
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
