const Car = require("../../models/Car");

const getOwnedCarsHandler = async (req, res) => {
    try{
        const {user_id} = req.jwTokenData;
        const result = await Car.find({
            owner_id: user_id
        });
    
        res.json({ownedCarsDetails : result});
    } catch(err){
        console.error(`Error in getOwnedCarsHandler for ${err}`);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {getOwnedCarsHandler}