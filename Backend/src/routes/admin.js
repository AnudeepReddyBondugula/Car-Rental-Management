const express = require("express");
// const {initializeSocket} = require("../services/SocketManager");

const router = express.Router();

// initializeSocket(server);
router.get("/", (req, res) => {
    res.send("<h1>In Admin Page</h1>")
})

module.exports = router;