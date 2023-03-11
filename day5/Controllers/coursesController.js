const { validate , validateGetRequest } = require('../utils/coursesValidation');

function getAllCourses (req,res) {
    res.status(200).json("all courses");
}

function getSpecificCourse (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a courses name");
    }
    res.status(200).json(`Good request the course name is : ${req.params.name}`);
}


function createCourses (req,res) {
    if ( !validate (req.body) ) {
        res.status(400).json("Bad request, you should specify a courses name and creditHours");
    }
    res.status(200).json ("create a course");
}


function updateSpecificCourse (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a courses name");
    }
    res.status(200).json("update a speicific course by name");
}


module.exports = { 
    getAllCourses ,
    getSpecificCourse ,
    updateSpecificCourse ,
    createCourses
};