var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});



module.exports = router;