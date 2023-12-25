const { default: mongoose } = require("mongoose");
const Car = require("../../models/Car");

const uploadCarHandler = async (req, res) => {
    try{
        const owner_id = req.jwTokenData.user_id;
        const {make, model, year, licensePlate, vin, currentCondition, rentalRate, description, location, images} = req.body;
        // const images = req.files; // TODO : Need to store the images in db and keep the URLs in here
        if (!(make && model && year && licensePlate && vin && currentCondition && rentalRate && description && location && images)){
            return res.status(400).json({
                error : "Required fiels empty"
            })
        }
        const newCar = new Car({
            owner_id : owner_id,
            make,
            model,
            year,
            license_plate : licensePlate,
            vin,
            current_condition : currentCondition,
            rental_rate : rentalRate,
            description,
            images,
            location
        })

        const savedCar = await newCar.save();
        res.status(201).json({message : "Car details uploaded successfully", car : savedCar});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidatorError){
            res.status(400).json({
                error : "Required Fields empty"
            })
        }
        console.error("Error in upload car handler", error);
        res.status(500).json({error : "Internal Server Error"})
    }
}

module.exports = {uploadCarHandler}