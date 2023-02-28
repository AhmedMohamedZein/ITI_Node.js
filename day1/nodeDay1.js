const fs = require('fs');
const http = require("http");

http.createServer((req,res)=>{
    let resultText = 'result = ' ;
    let result = 0 ; 
    if ( req.url != '/favicon.ico' ) {
        const data = req.url.split('/') ; 
        resultText += `${data[2]}`
        switch (data[1]) {
            case 'add' : 
                for (let i = 3 ; i < data.length ; i++) {
                    resultText += ` + ${data[i]}`;
                }
                for (let i = 2 ; i < data.length ; i++) {
                    result = result + Number(data[i]);
                }
                break;
            case 'sub' : 
                for (let i = 3 ; i < data.length ; i++) {
                    resultText += ` - ${data[i]}`;
                }
                for (let i = 2 ; i < data.length ; i++) {
                    result = result - Number(data[i]);
                }
                break;
            case 'mul':
                result = 1 ;
                for (let i = 3 ; i < data.length ; i++) {
                    resultText += ` * ${data[i]}`;
                }
                for (let i = 2 ; i < data.length ; i++) {
                    result = result * Number(data[i]);
                }
                break;
            case 'div':
                result = 1 ;
                for (let i = 3 ; i < data.length ; i++) {
                    resultText += ` \\ ${data[i]}`;
                }
                for (let i = 2 ; i < data.length ; i++) {
                    result = Number(data[i]) / result  ;
                }
                break;    
        }
    }
    fs.appendFileSync("result.txt" , `${resultText} = ${result}\n` , (err) => {
        console.log (err);
    });
    res.end(`<h1>${resultText} = ${result}<h1>`);
})
.listen("3000", ()=>{
    console.log("Lisining on Port 3000")
});
// fs.appendFileSync("file.text", " \nwhat we want" , (error)=>{
//     console.log(error);
// })
