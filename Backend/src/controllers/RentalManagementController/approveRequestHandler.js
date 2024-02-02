const RentalRequest = require("../../models/RentalRequest");

const approveRequestHandler = async (req, res) => {
    const requestId = req.params.id;
    const owner_id = req.jwTokenData.user_id;

    try{
        const rentalRequest = await RentalRequest.findById(requestId);
        if (!rentalRequest) {
            return res.status(404).json({error : "Rental request not found"});
        }
        if (owner_id != rentalRequest.owner_id.toString()){
            return res.status(403).json({error : "Unauthorized: not owner"});
        }
        if (rentalRequest.status === 'approved' || rentalRequest.status === 'rejected') {
            return res.status(400).json({error : "Cannot update status, Request already beed processed"});
        }
        const newStatus = req.body.action;
        if (newStatus !== 'approved' && newStatus !== 'rejected') {
            return res.status(400).json({error : "Invalid action, Use 'approved' or 'rejected' "});
        }
        rentalRequest.status = newStatus;
        await rentalRequest.save();

        res.json({message : "Rental Request status updated successfully", rentalRequest})
    } catch (error) {
        console.error("Error in updating rental request status: ", error);
        res.status(500).json({error : "Internal Server Error"});
    }
}

module.exports = {approveRequestHandler}