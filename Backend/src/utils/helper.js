const User = require("../models/User");

const getUser = async (filter) => {
    let user = await User.findOne(filter);
    if (user){
        return user;
    }
    else {
        return null;
    }
}


module.exports = {getUser};