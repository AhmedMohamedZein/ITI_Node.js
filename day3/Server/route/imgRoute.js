const express = require("express");
const path = require("path");
const route = express.Router();

route.get('/iti-logo.png' , (req,res)=>{
    res.sendFile(path.join(__dirname,"../../imgs/iti-logo.png"));
});



module.exports = { imgs : route };