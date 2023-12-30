const {carDetailsHandler} = require("../controllers/CarManagementController/carDetailsHandler");
const { deleteCarHandler } = require("../controllers/CarManagementController/deleteCarHandler");
const { fetchingCarsHandler } = require("../controllers/CarManagementController/fetchingCarsHandler");
const { updateCarDetailsHandler } = require("../controllers/CarManagementController/updateCarDetailsHandler");
const { uploadCarHandler } = require("../controllers/CarManagementController/uploadCarHandler");
const {getOwnedCarsHandler} = require("../controllers/CarManagementController/getOwnedCarsHandler");

module.exports = {carDetailsHandler, deleteCarHandler, fetchingCarsHandler, updateCarDetailsHandler, uploadCarHandler, getOwnedCarsHandler}