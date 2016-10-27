var fs = require("fs");

var readable = fs.createReadStream("./sample.txt",
	{encoding : "utf8", highWaterMark : 32 * 1024 });

var writable = fs.createWriteStream("./samplecopy.txt");

readable.on("data", function(data){

   console.log(data.length);
   writable.write(data);

})