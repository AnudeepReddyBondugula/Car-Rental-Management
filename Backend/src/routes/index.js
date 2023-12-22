const express = require("express");
// const fileUpload = require("express-fileupload");
// const { loginHandler, signupHandler } = require("../services/AuthenticationService");
// const { tokenVerification } = require("../middlewares/tokenVerificationMiddleware");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>In Index Page</h1>")
})

// router.post("/login", loginHandler);

// router.post("/signup", signupHandler);

module.exports = router;