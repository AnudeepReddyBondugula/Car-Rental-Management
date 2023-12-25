const Car = require("../../models/Car");
const User = require( "../../models/User");

const updateCarDetailsHandler = async (req, res) => {
    const carId = req.params.id;
    const updateDetails = req.body;
    const images = req.files;
    if (images && images.length > 0) updateDetails.images = images;
    const {user_id} = req.jwTokenData;
    try {
        const car = await Car.findById(carId);
        if (user_id.toString() !== car.owner_id.toString()) {
            return res.status(403).json({error : "Unauthorized: You are not the owner of this car"})
        }
        const updatedCar = await Car.findByIdAndUpdate(carId, updateDetails, {new : true});
        if (!updatedCar) {
            return res.status(404).json({error : "Car not found"});
        }
        res.json(updatedCar);
    } catch (err) {
        if (error instanceof mongoose.Error.CastError){
            return res.status(400).json({
                error : "Invalid car id"
            })
        }
        console.error("Error in updating car details : ", err);
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
};

module.exports = {updateCarDetailsHandler}