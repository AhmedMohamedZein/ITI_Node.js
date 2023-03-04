const http = require ("http");
const fs = require("fs");

const indexHTMLFile = fs.readFileSync("./ClientSide/index.html").toString();
const styleCSSFile =  fs.readFileSync("./ClientSide/style.css").toString();
const indexJSFile =  fs.readFileSync("./ClientSide/index.js").toString();
const iconIndexHTMLFile = fs.readFileSync ("./icons/faces-angry.png");
welcomeHTMLFile = fs.readFileSync("./ClientSide/welcome.html").toString(); 
const welcomeCSSFile = fs.readFileSync("./ClientSide/welcomeStyle.css").toString();
let fullName , email , moblieNumber, address ;

http.createServer ((req,res)=>{
    

        //#region  GET
        if (req.method == "GET") {
            console.log(req.url);
            switch (req.url) {
                case '/index.html' :
                    res.writeHead(200, "OK" , {'content-type':'text/html'});
                    res.write(indexHTMLFile);
                    break;
                case '/welcome.html' :
                    res.writeHead(200, "OK" , {'content-type':'text/html'});
                    break;    
                case '/style.css' :
                    res.writeHead(200, "OK" , {'content-type':'text/css'});
                    res.write(styleCSSFile);
                    break;
                case '/welcomeStyle.css' :
                    res.writeHead(200, "OK" , {'content-type':'text/css'});
                    res.write(welcomeCSSFile);
                    break;
                case '/index.js' :
                    res.writeHead(200, "OK" , {'content-type':'text/javascript'});
                    res.write(indexJSFile); 
                    break;
                case '/icons/faces-angry.png' :
                    res.writeHead(200, "OK" , {'content-type':'image/vnd.microsoft.icon'});
                    res.write(iconIndexHTMLFile);  
                    break;
                default :
                    res.write("<center><h1>Nothing here</h1></center>");
            }
            res.end();
        }
        //#endregion
        //#region POST
        else if (req.method == "POST") {
            req.on("data" , (data)=>{
                let myData = data.toString();
                fullName = myData.split("=")[1].split("&")[0]; //split("=")[1] to get the name after =
                email = decodeURIComponent(myData.split("=")[2].split("&")[0]);
                moblieNumber = myData.split("=")[3].split("&")[0];
                address = myData.split("=")[4].split("&")[0];
            });
            req.on("end" , ()=>{
                welcomeHTMLFile = welcomeHTMLFile.replace("{fullname}",fullName);
                welcomeHTMLFile = welcomeHTMLFile.replace("{email}",email);
                welcomeHTMLFile = welcomeHTMLFile.replace("{mobile}",moblieNumber);
                welcomeHTMLFile = welcomeHTMLFile.replace("{address}",address);
                res.write(welcomeHTMLFile);
                res.end();
            })
        } 
        //#endregion
    
}).listen ("7000" , () => console.log("http://localhost:7000") ) ;