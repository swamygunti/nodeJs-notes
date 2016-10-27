var fs = require("fs");

console.log("\n start reading file..");

fs.writeFile(__dirname + "/sample.txt", "Hellooo World");

console.log("\n Done reading file...");