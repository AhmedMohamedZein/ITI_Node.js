const express = require("express");
const router = express.Router(); 
//#region Students End-Points

router.get('/' , (req,res)=>{
    res.send("getAll students end point");
});

router.get('/:id',(req,res)=>{
    res.send(`spesific student data with id ${req.params.id}`);
});

router.post('/' , (req,res)=>{
    res.send('Create student with your body');
});
//#endregion

module.exports = { students : router };