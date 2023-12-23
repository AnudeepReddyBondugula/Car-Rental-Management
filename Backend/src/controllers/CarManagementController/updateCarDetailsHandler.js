import Car from "../../models/Car";
import User from "../../models/User";

export const updateCarDetailsHandler = async (req, res) => {
    const carId = req.params.id;
    const updateDetails = req.body;
    const {username} = req.jwTokenData;
    try {
        const user = await User.find({username});
        const car = await Car.findById(carId);
        if (user._id.toString() !== car.owner_id.toString()) {
            return res.status(403).json({error : "Unauthorized: You are not the owner of this car"})
        }
        const updatedCar = await Car.findByIdAndUpdate(carId, updateDetails, {new : true});
        if (!updatedCar) {
            return res.status(404).json({error : "Car not found"});
        }
        res.json(updatedCar);
    } catch (err) {
        console.error("Error in updating car details : ", err);
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
};