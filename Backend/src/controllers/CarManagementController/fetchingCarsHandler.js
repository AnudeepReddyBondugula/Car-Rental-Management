const Car = require("../../models/Car");


const fetchingCarsHandler = async (req, res) => {
    try{
        let cars = await Car.find();
        res.json(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {fetchingCarsHandler}