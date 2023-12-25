const { getUser } = require("../../utils/helper");
const {generateToken} = require("./generateToken");
require("dotenv").config();

async function loginHandler(req, res) {
    try{
        const {username, password} = req.body;
        if (!(username && password)){
            return res.status(400).json({
                error : "Required fields are empty"
            });
        }
        const user = await getUser({username, password});
        if (!user){
            return res.status(404).json({
                error : "User not found"
            });
        }
        const jwtoken = generateToken({username, user_id : user._id}, process.env.SECRET)

        res.status(200).json({
            message : "Login success",
            jwtoken
        })
        console.log("SUCCESS: Login Successfull !")
    }
    catch (err) {
        console.log("FAILED: Error in Login : " + err);
        return res.status(500).json({
            error : "Interval server error!"
        })
    }
}

module.exports = {loginHandler};