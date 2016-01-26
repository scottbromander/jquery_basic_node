var express = require('express');
var app = express();
var path = require('path');
var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("App listening on port: ", app.get("port"));
});