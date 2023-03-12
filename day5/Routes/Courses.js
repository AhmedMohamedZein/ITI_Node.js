const express = require("express");
const router = express.Router(); 
const {getAllCourses , getSpecificCourse , updateSpecificCourse , createCourses , deleteSpecificCourse} = require('../Controllers/coursesController');
//#region Students End-Points
router.get('/' , getAllCourses);

router.get('/:name', getSpecificCourse );

router.post('/' , createCourses);

router.put ('/', updateSpecificCourse);

router.delete('/:name' , deleteSpecificCourse); 
//#endregion

module.exports = { courses : router };