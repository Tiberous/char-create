var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
var server = http.createServer(function (request, response) {  
  response.writeHead(200, {"Content-Type": "text/html"});

app.get('/', function (req, res) {
  res.send('hello world')
})
server.listen(9000)})

