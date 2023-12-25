const { default: mongoose } = require("mongoose");
const Car = require("../../models/Car");

const carDetailsHandler = async (req, res) => {
    const carId = req.params.id;
    try{
        const carDetails = await Car.findById(carId);
        if (!carDetails){
            return res.status(404).json({
                error : "Car not found"
            })
        } else {
            return res.json(carDetails);
        }
    } catch (error) {
        if (error instanceof mongoose.Error.CastError){
            return res.status(400).json({
                error : "Invalid car id"
            })
        }
        console.error('Error fetching rental details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {carDetailsHandler}