const User = require("../models/User");
const fs = require("node:fs")
const getUser = async (filter) => {
    let user = await User.findOne(filter);
    if (user){
        return user;
    }
    else {
        return null;
    }
}

const deleteFiles = (paths) => {
    for(let i = 0; i < paths.length; i++){
        fs.unlink(paths[i], (err) => {
            if (err) {
              if (err.code === 'ENOENT') {
                console.error('The file does not exist');
              } else {
                console.error(err.message);
              }
            } else {
              console.log('The file was deleted');
            }
          });
    }
}


module.exports = {getUser, deleteFiles};