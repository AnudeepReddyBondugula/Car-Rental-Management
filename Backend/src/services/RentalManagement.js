const { approveRequestHandler } = require("../controllers/RentalManagementController/approveRequestHandler");
const { rentalRequestHandler } = require("../controllers/RentalManagementController/rentalRequestHandler");
const { rentalsHistoryHandler } = require("../controllers/RentalManagementController/rentalsHistoryHandler");
const { rentalsNotificationHandler } = require("../controllers/RentalManagementController/rentalsNotificationHandler");

module.exports = {approveRequestHandler, rentalRequestHandler, rentalsHistoryHandler, rentalsNotificationHandler}