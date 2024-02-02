const Car = require("../../models/Car");
const User = require( "../../models/User");

const deleteCarHandler = async (req, res) => {
    const carId = req.params.id;
    const {user_id} = req.jwTokenData;
    try {
        const car = await Car.findById(carId);
        if (!car){
            return res.status(404).json({
                error : "Car not found"
            })
        }
        if (user_id.toString() !== car.owner_id.toString()) {
            return res.status(403).json({error : "Unauthorized: You are not the owner of this car"})
        }
        const deletedCar = await Car.findByIdAndDelete(carId);
        if (!deletedCar) {
            return res.status(404).json({error : "Car not found"});
        }
        return res.json({message : "Car deleted successfully", deletedCar});
    } catch (err) {
        console.error("Error in deleting car : ", err);
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
}

module.exports = {deleteCarHandler}