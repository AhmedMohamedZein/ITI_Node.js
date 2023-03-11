//#region requires
const express = require("express");
const { students }  = require("./Routes/Students");
const { courses } = require('./Routes/Courses');
const  loggin  = require('./MiddleWares/loggin');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//#endregion

//#region Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000 ;
//#endregion

//#region MiddleWares
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended : true} ) );
app.use( loggin ); // this a global middleware every request will pass throught 
//#endregion

//#region  root 
app.get('/' , (req,res)=>{
    
    res.send('Welcome to my website this is the root of the api service you can choose /api/students/ or /api/courses');
});
//#endregion

//#region  End-Points
app.use("/api/students" , students);
app.use("/api/courses" , courses);
//#endregion


app.listen(PORT ,()=>{
    console.log ('http://localhost:'+PORT);
});