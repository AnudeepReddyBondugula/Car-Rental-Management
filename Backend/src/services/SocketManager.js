const socketIO = require("socket.io");

let io;

function initializeSocket(server) {
    io = new socketIO.Server(server, {
        cors : {
            origin : "*",
            methods: "*"
        }
    });

    io.on('connection', (socket) => {
        console.log("User Connected");

        socket.on("disconnect", () => {
            console.log("User Disconnected");
        })
    })
}

function getIO() {
    if (!io) throw new Error('Socket.IO has not been initialized');
    return io;
}

module.exports = {initializeSocket, getIO};