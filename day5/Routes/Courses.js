const express = require("express");
const router = express.Router(); 
//#region Students End-Points

router.get('/' , (req,res)=>{
    res.send("getAll Courses end point");
});

router.get('/:id',(req,res)=>{
    res.send(`spesific Course data with id ${req.params.id}`);
});

router.post('/' , (req,res)=>{
    res.send('Create Course with your body');
});

router.put ('/:id', (req,res)=>{
    res.send(`Update COurse with id ${req.params.id}`);
});
//#endregion

module.exports = { students : router };