'use strict';
var express = require("express");

var app = express();
var port = 5000;

//static files
app.use(express.static('public'));
app.use(express.static('src/views'));

//routers 
app.get('/', function(req, res){
    res.send("Hello world this is my homepage");
});

app.get('/books', function(req, res){
    res.send("Hello books");
});

//listen server
app.listen(port, function(err){
    console.log('Running server on port ' + port);
});


