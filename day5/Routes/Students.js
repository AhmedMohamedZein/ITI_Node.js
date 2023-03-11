const express = require("express");
const router = express.Router(); 
const { getAllStudents , getSpecificStudent , updateSpecificStudent ,createStudent } = require ('../Controllers/studentsController');
//#region Students End-Points

router.get('/' , getAllStudents);

router.get('/:id',getSpecificStudent);

router.post('/' , createStudent);

router.put('/:id' , updateSpecificStudent);
//#endregion

module.exports = { students : router };