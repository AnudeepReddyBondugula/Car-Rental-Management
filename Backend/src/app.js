// server.js
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const path = require("path")

const bodyParser = require("body-parser");
const cors = require("cors")
const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");

const {logger} = require("./middlewares/logger");

app.use(cors({
  credentials : true
}))

app.use(bodyParser.json());
app.use(logger);

app.use("/static",express.static(path.join(__dirname, 'images/')));

app.use('/', indexRouter);
app.use("/admin", adminRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    error : "Page not found"
  })
});

module.exports = server;
