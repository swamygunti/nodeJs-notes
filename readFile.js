var fs = require("fs");

console.log("\n start reading file..");

var data = fs.readFileSync(__dirname + "/sample.txt");

console.log(data.toString());

console.log("\n Done reading file...");