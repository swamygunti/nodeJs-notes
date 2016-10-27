var fs = require("fs");

console.log("Start reading file \n");

fs.readFile(__dirname + "/sample.txt", function(error , data){
 
   console.log(data.toString());

})

console.log("Done reading file");