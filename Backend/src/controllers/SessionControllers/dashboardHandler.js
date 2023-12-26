const User = require("../../models/User");

const dashboardHandler = async (req, res) => {
    try{
        const {user_id} = req.jwTokenData;
        const user = await User.findById(user_id);
        res.json({
            details: {
                userId : user_id,
                username : user.username,
                fullName : user.fullName
            }
        })
    } catch(err){
        console.error("Error in dashboardHandler", err);
        res.status(500).json({
            error : "Internal server error"
        });
    }
}

module.exports = {dashboardHandler};