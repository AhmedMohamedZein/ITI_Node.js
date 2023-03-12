const express = require("express");
const router = express.Router(); 
const { getAllStudents , getSpecificStudent , updateSpecificStudent ,createStudent , deleteSpecificStudent} = require ('../Controllers/studentsController');
//#region Students End-Points

router.get('/' , getAllStudents);

router.get('/:id',getSpecificStudent);

router.post('/' , createStudent);

router.put('/' , updateSpecificStudent);

router.delete('/:id' , deleteSpecificStudent);
//#endregion

module.exports = { students : router };