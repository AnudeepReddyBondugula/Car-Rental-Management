import { Typography } from '@material-tailwind/react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { sendJsonRequest, getImage } from '../services/HttpProvider';
const constants = import.meta.env;

const CarCard = (props) => {
    const availability_status_colors = {
        'available' : "green",
        'rented' : "red",
        'maintenance' : 'blue'
    }
    const availability_color = availability_status_colors[props.carDetails.availability_status];
    const [imageURL, setImageURL] = useState('');
    const handleDelete = async() => {
        const {status, responseBody} = await sendJsonRequest(`/cars/${props.carDetails._id}`, "DELETE");
        if (status >= 400) {
            console.error(responseBody.error)
            alert("Error: Failed to get car details");
        } else{
            alert("Car Deleted Successfully, please reload")

        }
    }

    const setImage = async () => {
        setImageURL(() => {
            return constants.VITE_BACKEND_URL + "/static/" + props.carDetails.images[0];
        });
    }

    useEffect(() => {
        setImage();
    }, [])
  return (
    <Link className='flex flex-col bg-white w-[200px] p-2 mt-2 rounded-lg hover:shadow-lg hover:bg-blue-gray-50 transition duration-300' to={`/car?id=${props.carDetails._id}`}>
        <div><img alt={`Car Image`} src={imageURL} className='w-[190px] h-[150px] rounded ' /></div>
        <div id='details' className='flex flex-col'>
            <div className='flex justify-between'>
                <Typography variant='h6'>{props.carDetails.make}</Typography>
                <Typography>Model : {props.carDetails.model}</Typography>
            </div>
            <div className='flex justify-between'>
                <Typography color={availability_color}>{props.carDetails.availability_status}</Typography>
                <Typography>Rate: ${props.carDetails.rental_rate}</Typography>
            </div>
        </div>
        {props.update &&
            <div className='flex justify-between'>
                <Typography color='green'><Link to={"/edit?" + `id=${props.carDetails._id}`}>Edit</Link></Typography>
                <Typography color='red' onClick={handleDelete}>Delete</Typography>
            </div>
        }
    </Link>
  )
}

export default CarCard
