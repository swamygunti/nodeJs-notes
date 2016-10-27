var EventEmitter = require("events").EventEmitter;
var radium = new EventEmitter();

radium.on("radiation", function(msg){

  console.log(msg);

})

setInterval(function(){

  radium.emit("radiation", "GAMMAAA");

},1000)
