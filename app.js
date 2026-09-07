const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Application started");

console.log(isEven(10));
console.log(isEven(7));
console.log(isEven(24));
console.log(isEven(15));

log("Application finished");
