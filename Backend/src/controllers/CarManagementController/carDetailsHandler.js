import Car from "../../models/Car";

export const carDetailsHandler = async (req, res) => {
    const carId = req.params.id;
    try{
        const carDetails = await Car.findById(carId);
        return res.json(carDetails);
    } catch (error) {
        console.error('Error fetching rental details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}