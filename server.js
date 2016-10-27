var http = require("http");

var server = http.createServer(function(req,res){

   res.writeHead(200,{"Content-Type": "text/plain"});
   res.end("Hellooo Hyderabad...!!!!");

});

server.listen(8081, function(){

  console.log("Server listen at port 8081..");

});