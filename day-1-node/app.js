const { add, sub , mul , div} = require("./math.js");

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(div(10, 5));
const args = process.argv;
console.log(`Hi ${args[2]} , you are learning ${args[3]}`);