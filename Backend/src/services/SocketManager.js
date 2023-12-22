const socketIO = require("socket.io");

let io;

function initializeSocket(server) {
    io = new socketIO.Server(server, {
        cors : {
            origin : "*",
        }
    });

    io.on('connection', (socket) => {
        let lat;
        let long;

        console.log("User Connected");

        socket.on("change", (args) => {
            console.log("Change", args);
            io.emit("change", {
                lat: args.lat, 
                long: args.long
            })
        })

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