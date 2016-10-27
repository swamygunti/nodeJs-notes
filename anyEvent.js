var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

emitter.on("swim",function(data){

  console.log(data);

})

emitter.emit("swim","Hi,,,, Am Swimming....");