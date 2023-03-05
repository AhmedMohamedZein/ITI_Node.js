const express = require("express");
const path = require("path");
const route = express.Router();



route.get('/index.html' , (req,res)=>{
    res.sendFile(path.join(__dirname,"../../ClientSide/index.html"));
});

route.get('/indexStyle.css' , (req,res)=>{
    res.sendFile(path.join(__dirname,"../../ClientSide/indexStyle.css"));
});

route.get('/index.js' , (req,res)=>{
    res.sendFile(path.join(__dirname,"../../ClientSide/index.js"));
});



module.exports = {
    index  : route
}