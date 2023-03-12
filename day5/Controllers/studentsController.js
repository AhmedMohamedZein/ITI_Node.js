const { validate , validateGetRequest , validateDeleteRequest} = require('../utils/studentsValidation');
const Student = require('../Modules/studentModule');

async function getAllStudents (req,res) {
    const getAllStudentsObject = new Student ();
    const  getAllStudents = await getAllStudentsObject.getAllStudents();
    res.status(200).json(getAllStudents);
}

async function getSpecificStudent (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a student id");
    }
    else { 
        try{
            const getSpecificStudentObject = new Student();
            const getSpecificStudent = await getSpecificStudentObject.getSpecificStudent(req.params);
            res.status(200).json(getSpecificStudent);
        }
        catch (error) {
            res.status(500).json("Server side error");
        }
    }
}


async function createStudent (req,res) {
    if ( !validate (req.body) ) {
        res.status(400).json("Bad request, you should specify a student name and id");
    }
    else { 
        try {
            const createStudentObject = new Student();
            await createStudentObject.createStudnt(req.body);
            res.status(200).json("done !");
        }
        catch (error) {
            res.status(500).json("Server side error ");
        }
    }
}


async function updateSpecificStudent (req,res) {
    if ( !validateGetRequest(req.body) ) {
        res.status(400).json("Bad request, you should specify a student id");
    }
    else {
        try{
            const updateSpecificStudentObject = new Student();
            await updateSpecificStudentObject.updateSpecificStudent(req.body);
            res.status(200).json("done !");
        }catch (error) {
            res.status(500).json("Server side error ");
        }
    }
}

async function deleteSpecificStudent (req,res) {
    if ( !validateDeleteRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a student id");
    }
    else {
        try{
            const deleteSpecificStudentObject = new Student();
            await deleteSpecificStudentObject.deleteSpecificStudent(req.params);
            res.status(200).json("done !")
        }
        catch (error){
            res.status(500).json("Server side error");
        }
    }
}

module.exports = { 
    getAllStudents ,
    getSpecificStudent ,
    updateSpecificStudent ,
    createStudent,
    deleteSpecificStudent
};