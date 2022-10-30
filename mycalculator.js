const express = require('express');
const bodyparse = require("body-parser");

const app = express();    // setup a new app
app.use(bodyparse.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result is: " + result)
});



app.listen(3000, function(){
  console.log("Server is running on port 3000")
});