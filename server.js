// jshint esversion6

const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>")
});

app.get("/contact", function(req, res){
  res.send("Contact me at blah...")
});

app.get("/about", function(req, res){
  res.send("Hey! This is the page for my intro....")
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
