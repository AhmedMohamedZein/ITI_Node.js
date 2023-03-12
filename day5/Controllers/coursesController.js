const { validate , validateGetRequest , validateUpdate } = require('../utils/coursesValidation');
const Course = require('../Modules/coursesModule');

async function getAllCourses (req,res) {
    try {
        const allCoursesObject = new Course ();
        const allCourses = await allCoursesObject.getAllCourses();
        console.log(allCourses);
        res.status(200).json(allCourses);
    }
    catch (error) {
        res.status(500).json("Server Error");
    }
}

async function getSpecificCourse (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a courses name");
    }
    else {
        try {
            const specificCourseObject = new Course ();
            const specificCourse = await specificCourseObject.getSpecificCourse(req.params); //object contains 2 variables
            console.log(specificCourse);
            res.status(200).json(specificCourse);    
        }
        catch (error) {
            res.status(500).json("Server error");
        }
    }
}


async function createCourses (req,res) {
    if ( !validate (req.body) ) {
        res.status(400).json("Bad request, you should specify a courses name and creditHours");
    }
    else {
        try {
            const createCourse = new Course ();
            await createCourse.createCourses(req.body);
            res.status(200).json ("created a course successfully !");
        }catch (error) {
            res.status(500).json("Server error");
        }
    }
}


async function updateSpecificCourse (req,res) {
    if ( !validateUpdate(req.body) ) {
        res.status(400).json("Bad request, you should specify a courses name");
    }
    else {
        try {
            const updateSpecificCourseObject = new Course ();
            await updateSpecificCourseObject.updateSpecificCourse(req.body); //object contains 2 variables
            res.status(200).json("Done !");    
        }
        catch (error) {
            res.status(500).json("Server error");
        }
    }
}

async function deleteSpecificCourse (req,res) {
    if ( !validateGetRequest(req.params) ) {
        res.status(400).json("Bad request, you should specify a courses name");
    }
    else {
        try {
            const deleteSpecificCourseObject = new Course ();
            await deleteSpecificCourseObject.getSpecificCourse(req.params); //object contains 2 variables
            res.status(200).json("Done !");    
        }
        catch (error) {
            res.status(500).json("Server error");
        }
    }
}


module.exports = { 
    getAllCourses ,
    getSpecificCourse ,
    updateSpecificCourse ,
    createCourses,
    deleteSpecificCourse
};