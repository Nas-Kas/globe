var express = require('express');

var app = express ();

//setup a path to a file
//app.use ("/static",express.static(__dirname + "webgl-globe-master"));
app.get('/', function(req,res){
	res.send('Hello World!');
});
//port #
//app.listen(3000,function(request,response){
app.listen(3000,function(){
	console.log("listening on port 3000");
});

//npm install express
// node index.js should run your server