var express = require('express');

var fs=require('fs');
var buffer=new Buffer(fs.readFileSync('index.html'));
var str=buffer.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});