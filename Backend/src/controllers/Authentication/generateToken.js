const jwt = require("jsonwebtoken");

const generateToken = (content, secret) => {
    const jwtoken = jwt.sign(content, secret);
    return jwtoken;
}

module.exports = {generateToken};