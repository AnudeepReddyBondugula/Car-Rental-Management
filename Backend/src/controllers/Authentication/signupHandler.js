const { getUser } = require("../../utils/helper");
const User = require("../../models/User")

const signupHandler = async (req, res) => {
    try{
        const {username, password, fullName, contactNumber} = req.body;
        if (!(username && password && fullName && contactNumber)){
            return res.status(400).json({
                error : "Required fields are empty"
            })
        }
        let user = await getUser({username}); //* Checking if any user Exists aldready
        if (user){
            return res.status(409).json({
                error : "Username already exists"
            });
        }
        user = await User({
            username,
            password,
            fullName,
            contactNumber
        })
        await user.save();
        return res.status(201).json({
            message : "User created successfully"
        })
    } catch(err) {
        console.error("Error in SignUp: " + err);
        res.status(500).json({
            error : "Internal server error"
        })
    }
}

module.exports = {signupHandler}