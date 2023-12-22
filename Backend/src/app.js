// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new socketIO.Server(server, {
  cors : {
    origin : "*",
    methods : "*"
  }
});

const cors = require('cors');

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on("change", (args) => {
    io.emit("change", {
        lat: args.lat, 
        long: args.long
    })
})

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
