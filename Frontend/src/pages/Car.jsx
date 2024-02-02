import { Link } from 'react-router-dom';
import { Input, Typography, Button, Textarea } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import { verifyAndRedirect } from '../services/AuthenticationProvider'
import { useNavigate } from 'react-router'
import SideBar from '../components/SideBar'
import { sendJsonRequest } from '../services/HttpProvider'
import CarCard from '../components/CarCard'


const Car = (props) => {
    const [carId, setCarId] = useState('');
    const [carDetails, setCarDetails] = useState({});
    const [idx, setIdx] = useState(0);
    const [pickUpDate, setPickUpDate] = useState(new Date());
    const fetchCarDetails = async (id) => {
        const {status, responseBody} = await sendJsonRequest(`/cars/${id}`);
        if (status >= 400){
            alert("Error in getting car details: " + responseBody.error);
        } else{
            setCarDetails(responseBody.carDetails);
        }
    }
    let numOfImages = carDetails.images ? carDetails.images.length : 0;
    const imageChangeHandle = (offset) => {
        const tempIdx = idx + offset;
        if (tempIdx < 0){
            setIdx(numOfImages - 1);
        } else{
            setIdx(tempIdx % numOfImages);
        }
    }

    const handleRentCar = async () => {
        const body = {
            carId,
            pickUpDate
        }

        const {status, responseBody} = await sendJsonRequest("/rentals/requests", "POST", {}, JSON.stringify(body));
        if (status >= 400){
            alert("Error: " + responseBody.error);
        } else{
            alert("Sent Request, Waiting for approval");
        }
    }
    useEffect(() => {
        const searchString = window.location.search;
        const searchParams = new URLSearchParams(searchString);
        const id = searchParams.get('id');
        setCarId(id);
        fetchCarDetails(id);
      }, [])
    return (
        <div className='flex flex-col h-screen w-screen justify-between'>
      <div>
        <AppBar title={"Car Details"}></AppBar>
      </div>
      <div className='flex h-full'>
        <div className='bg-blue-gray-900 hidden md:block md:w-1/5 lg:w-1/5 '>
          <SideBar/>
        </div>
        <div className='overflow-y-scroll h-fit mb-3 p-5 flex flex-col flex-1 gap-3 lg:gap-4 items-center'>
            <div className='gap-3 flex' id="images">
                <div className=' flex items-center'>
                    <Button onClick={() => imageChangeHandle(-1)} className='bg-blue-gray-100 p-3 rounded-lg font-bold text-black'>&lt;</Button>
                </div>
                <div className=''>
                    <img className='h-[200px] w-[400px]' src={carDetails.images ? `http://localhost:3000/static/${carDetails.images[idx]}` : null}/>
                </div>
                <div className='flex items-center'>
                    <Button onClick={()=> {
                        imageChangeHandle(1)
                    }} className='bg-blue-gray-100 p-3 rounded-lg font-bold text-black'>&gt;</Button>
                </div>
            </div>
            <div className='md:flex-grow-[1] flex flex-col w-full'>
                <div id='DetailsDisplay' className='flex flex-col'>
                    <div className='flex w-full'>
                        <div className='flex flex-col flex-1 self-center'>
                            <Typography className='self-center'>Car Name: {carDetails.make}</Typography>
                            <Typography className='self-center'>Year : {carDetails.year}</Typography>
                            <Typography className='self-center'>Availability: {carDetails.availability_status}</Typography>
                            <Typography className='self-center'>License plate: {carDetails.license_plate}</Typography>
                        </div>
                        <div className='border-r-2 border-gray-400'></div>
                        <div className='flex flex-col flex-1'>
                            <Typography className='self-center'>Model : {carDetails.model}</Typography>
                            <Typography className='self-center'>Condition: {carDetails.current_condition}</Typography>
                            <Typography className='self-center'>Rental Rate: ${carDetails.rental_rate}/hr</Typography>
                            <Typography className='self-center'>VIN : {carDetails.vin}</Typography>
                        </div>
                    </div>
                    <Typography className='self-center'>Description</Typography>
                    <Typography disabled className='self-center'>{carDetails.description} 
                    </Typography>
                </div>
                <div id='RentCar' className='rounded self-center flex gap-3'>
                    <Input type='date' value={pickUpDate} onChange={e => setPickUpDate(e.target.value)} label='Pickup Date' disabled={!carDetails.availability_status == 'available'} />
                    <Button color='red' onClick={handleRentCar} disabled={!carDetails.availability_status == 'available'}>GET</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Car
