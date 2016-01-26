var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/kittens", function(req,res){
    res.json({"message" : "Meow"});
});

router.get("/*", function(req, res){
    console.log("Here is the request: ", req.params);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;