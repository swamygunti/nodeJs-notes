
var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();
var fs = require("fs");
var fileName = "./sample.txt";
// 1. start reading file
emitter.on("Start_reading", function(fileName){

  console.log(" start reading file........");
  fs.readFile(fileName, function(err,data){
    
      if(err){
        
         emitter.emit("error",err);

      }
      else
      {

      	 console.log("done reading file......");
      	emitter.emit("Print_content", data);
      }

  })

})

//2. print the file content
emitter.on("Print_content", function(data){

  console.log(data.toString());
  console.log("done printing the data......");
  emitter.emit("done");

})


//3.Error
emitter.on("error", function(err){

  console.log("Oops something went wrong");
  console.log(err);

})


//4.Done
emitter.on("done", function(){

  console.log("done..... good bye evnet emittersss... ");

})


emitter.emit("Start_reading", fileName);