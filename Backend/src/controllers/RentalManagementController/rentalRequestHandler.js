const Car = require("../../models/Car");
const RentalRequest = require("../../models/RentalRequest");
const User = require("../../models/User");

const rentalRequestHandler = async (req, res) => {
    try{
        if (req.method == 'GET'){
            const {user_id : requesterId} = req.jwTokenData;
            let listOfRentalRequests = await RentalRequest.find({
                requester_id : requesterId
            })
            if (!listOfRentalRequests) listOfRentalRequests = [];
            return res.json({
                message : "List of Rental Requests",
                listOfRentalRequests
            }) 
        } else if (req.method == 'POST'){
            const {carId, pickUpDate} = req.body;
            const {user_id : requesterId} = req.jwTokenData;
            const car = await Car.findById(carId);
            if (!car) return res.status(404).json({error : "Car not found"});
            
            const owner = await User.findById(car.owner_id);
            if (!owner) return res.status(404).json({error : "User not found"});
            if (car.owner_id.toString() == requesterId) return res.status(400).json({
                error : "You are the owner of the car"
            })
            const newRentalRequest = new RentalRequest({
                requester_id : requesterId,
                car_id : carId,
                desired_pickup_date : new Date(pickUpDate),
                owner_id : owner._id,
                status : 'pending'
            })
        
            const savedRequest = await newRentalRequest.save();
            res.json({
                message : "Rental request created successfully",
                rentalRequest : savedRequest,
            });
        }
    } catch (error) {
        console.error("Error in creating rental request", error);
        res.status(500).json({error : 'Internal Server Error'});
    }
}

module.exports = {rentalRequestHandler}