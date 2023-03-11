//#region requires
const express = require("express");
const { students }  = require("./Routes/Students");
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
//#endregion

//#region  End-Points
app.use("/api/students" , students);
//#endregion


app.listen(PORT ,()=>{
    console.log ('http://localhost:'+PORT);
});