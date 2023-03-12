const { validate , validateGetRequest } = require('../utils/studentsValidation');

function getAllStudents (req,res) {
    res.status(200).json("all students");
}

function getSpecificStudent (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a student id");
    }
    res.status(200).json(`Good request the student id is : ${req.params.id}`);
}


function createStudent (req,res) {
    if ( !validate (req.body) ) {
        res.status(400).json("Bad request, you should specify a student name and id");
    }
    res.status(200).json ("create a new student");
}


function updateSpecificStudent (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a student id");
    }
    res.status(200).json(`Good update request the student id is : ${req.params.id} updated`);
}

function deleteSpecificStudent (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a student id");
    }
    res.status(200).json(`Good request the student id you want to delete is : ${req.params.id}`);
}

module.exports = { 
    getAllStudents ,
    getSpecificStudent ,
    updateSpecificStudent ,
    createStudent,
    deleteSpecificStudent
};