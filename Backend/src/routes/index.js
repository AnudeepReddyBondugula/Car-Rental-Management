const express = require("express");
const fileUpload = require("express-fileupload");
const {
  loginHandler,
  signupHandler,
} = require("../services/AuthenticationService");
const {
  tokenVerification,
} = require("../middlewares/tokenVerificationMiddleware");
const {
  uploadCarHandler,
  carDetailsHandler,
  deleteCarHandler,
  fetchingCarsHandler,
  updateCarDetailsHandler,
} = require("../services/CarManager");
const {
  approveRequestHandler,
  rentalRequestHandler,
  rentalsHistoryHandler,
  rentalsNotificationHandler,
} = require("../services/RentalManagement");


const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>In Index Page</h1>");
});

// Authentication Routed
router.post("/login", loginHandler); // Log in User
router.post("/signup", signupHandler); // Register new User
// router.get("/dashboard", tokenVerification, dashboardHandler); // Get User Details

// Car Management Routes
// Upload a new car for rent
router.post("/cars", tokenVerification, fileUpload({ createParentPath: true }), uploadCarHandler);

// Get List of cars
router.get("/cars", tokenVerification, fetchingCarsHandler);

// Get Details of specific cars
router.get("/cars/:id", tokenVerification, carDetailsHandler);

// Update details of specific car
router.put("/cars/:id", tokenVerification, updateCarDetailsHandler);

// Delete a car
router.delete("/cars/:id", tokenVerification, deleteCarHandler);

// Rental Routes
// Initiate a request for a specific car
router.post("/rentals/requests", tokenVerification, rentalRequestHandler);
// Get the list of rental request made by the user
router.get("/rentals/requests", tokenVerification, rentalRequestHandler);

// Get the list of rental requests for the owner
router.get("/rentals/notifications", tokenVerification, rentalsNotificationHandler);

// Approve or Decline the rental request
router.put("/rentals/requests/:id", tokenVerification, approveRequestHandler);

// Get History of rentals
router.get("/rentals/history", tokenVerification, rentalsHistoryHandler);

module.exports = router;
