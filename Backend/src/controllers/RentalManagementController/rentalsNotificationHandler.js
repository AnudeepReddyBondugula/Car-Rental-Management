const RentalRequest = require("../../models/RentalRequest");

const rentalsNotificationHandler = async (req, res) => {
    const {user_id : owner_id} = req.jwTokenData;
    try{
        let listOfRentalsNotifications = await RentalRequest.find({
            owner_id,
            status : "pending"
        })
        if (!listOfRentalsNotifications) listOfRentalsNotifications = [];
        res.json({
            message : "Fetched rentals notifications Successfully",
            listOfRentalsNotifications
        })
    } catch (error) {
        console.error("Error in rentalsNotificationHandler: ", error);
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
}
module.exports = {rentalsNotificationHandler}