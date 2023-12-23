import Car from "../../models/Car";

export const fetchingCarsHandler = async (req, res) => {
    try{
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}