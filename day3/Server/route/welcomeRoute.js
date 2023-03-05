const express = require("express");
const path = require("path");
const route = express.Router();


const userInfo = { } ;


route.post('/welcome.html' , (req,res)=>{
    userInfo["username"] = req.body.fullName;
    userInfo["email"] = req.body.email;
    userInfo["mobile"] = req.body.mobileNumber;
    userInfo["address"] = req.body.address;
    res.sendFile(path.join(__dirname,"../../ClientSide/welcome.html"));
});

route.get('/welcomeStyle.css' , (req,res)=>{
    res.sendFile(path.join(__dirname,"../../ClientSide/welcomeStyle.css"));
});

route.get('/welcome.js' , (req,res)=>{
    res.sendFile(path.join(__dirname,"../../ClientSide/welcome.js"));
});


route.get('/userdata', (req,res)=>{
    res.send( userInfo );
});

module.exports = {
    welcome  : route
}