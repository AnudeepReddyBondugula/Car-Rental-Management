const rentalsHistoryHandler = async (req, res) => {
    const {user_id : owner_id} = req.jwTokenData;
    const {status} = req.query;
    try{
        let listOfRentalsHistory = await RentalRequest.find({
            owner_id,
            status : status || {$in : ['approved', 'rejected']}
        })
        if (!listOfRentalsHistory) listOfRentalsHistory = [];
        res.json({
            message : "Fetched rentals history Successfully",
            listOfRentalsHistory
        })
    } catch (error) {
        console.error("Error in rentalsHistoryHandler: ", error);
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
}

module.exports = {rentalsHistoryHandler}