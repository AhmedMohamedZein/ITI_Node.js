const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./ClientSide/index.html"));
});
 
app.get('/Styels/index.css', (req,res)=>{
    res.sendFile(path.join(__dirname, "./ClientSide/Styels/index.css"));
});

app.get('/ClientSide/imgs/DefaultWhatsAppBackground.jpg' , (req,res)=>{
    res.sendFile(path.join(__dirname, "./ClientSide/imgs/DefaultWhatsAppBackground.jpg"));
});


app.get('/ClientSide/imgs/whatsapp.png' , (req,res)=>{
    res.sendFile(path.join(__dirname, "./ClientSide/imgs/whatsapp.png"));
});


io.on('connection', (socket) => {
    
    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message' , msg);
    });

}); 
  
server.listen(3000, () => {
    console.log('listening on *:3000');
});