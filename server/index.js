const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors=require('cors')
const app = express();
const jsonData=require('./paragraph.json')




app.use(cors())
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors:{
        origin:["http://localhost:3000","https://type-racer-eta.vercel.app/"]
    }
});

const easyUsers=[];
const mediumUsers=[];
const hardUsers=[];
const date=new Date().getUTCDate().toString()
const month=new Date().getUTCMonth()

const easyId=date+'-'+month+'-'+'easy';
const mediumId=date+'-'+month+'-'+'medium';
const hardId=date+'-'+month+'-'+'hard';

io.on("connection", (socket) => {
    socket.on('join-easy-room',(data)=>{
        socket.join(easyId)
        easyUsers.push({username:data.username,id:socket.id});
        io.emit('easy-room-joined',easyUsers);

    })
    socket.on('join-medium-room',(data)=>{
        socket.join(mediumId)
        mediumUsers.push({username:data.username,id:socket.id});
        io.emit('medium-room-joined',mediumUsers);
    })
    socket.on('join-hard-room',(data)=>{
        socket.join(hardId)
        hardUsers.push({username:data.username,id:socket.id});
        io.emit('hard-room-joined',hardUsers);
    })


    socket.on('easy-start',()=>{
        io.to(easyId).emit("started",jsonData.easy)
    })
    socket.on('medium-start',()=>{
        io.to(easyId).emit("started",jsonData.medium)
    })
    socket.on('hard-start',()=>{
        io.to(easyId).emit("started",jsonData.hard)
    })
});

httpServer.listen(8000,()=>{
    console.log(8000)
})