const express = require("express");
const dotenv = require("dotenv");
const { index } = require("./route/indexRoute");
const { welcome } = require("./route/welcomeRoute");
const { imgs } =require("./route/imgRoute");
dotenv.config(); // config info for the app 
const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(express.urlencoded({extended : true})); // for the form data formate 
app.use(express.json()); // to start allocate the request body
 


app.use('/index',index); // index page route
app.use('/welcome',welcome); // welcome page route
app.use('/imgs', imgs); // images route

app.listen(PORT , ()=>{
    console.log(`Server is UP on Port : ${PORT}`);
});
