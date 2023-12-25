const dashboardHandler = async (req, res) => {
    try{
        
    } catch(err){
        console.error("Error in dashboardHandler", err);
        res.status(500).json({
            error : "Internal server error"
        });
    }
}

module.exports = {dashboardHandler};