var path = require('path')
var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser');

var server = express()

server.use(cors('*'));

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.json())

server.use('/api/images', require('./routes/images'))


server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = server
