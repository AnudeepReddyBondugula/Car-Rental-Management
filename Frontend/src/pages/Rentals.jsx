import AppBar from "../components/AppBar"
import SideBar from "../components/SideBar"
import {useState, useEffect} from "react";
import { sendJsonRequest } from '../services/HttpProvider'
import { Input, Typography, Button, Textarea } from '@material-tailwind/react'

const Rentals = () => {
  const [rentalRequests, setRentalRequests] = useState([]);

  const getRentalRequests = async () => {
    const {status, responseBody} = await sendJsonRequest("/rentals/notifications");
    if (status >= 400){
      alert("Error in Getting Requests: ", responseBody.error);
    } else{
      
      const requestsList = responseBody.listOfRentalsNotifications;
      for(let i = 0; i < requestsList.length; i++){
        const {carDetails} = (await sendJsonRequest(`/cars/${requestsList[i].car_id}`)).responseBody
        requestsList[i].carDetails = carDetails;
      }
      
      setRentalRequests(requestsList);
      
      // console.log(requestsList);
    }
  }

  useEffect(() => {
    getRentalRequests();  
  }, [])


  return (
    <div className='flex flex-col h-screen w-screen justify-between'>
      <div>
        <AppBar title={"Rentals"}></AppBar>
      </div>
      <div className='flex justify-between h-full'>
        <div className='bg-blue-gray-900 hidden md:block md:w-1/5 lg:w-1/5 '>
          <SideBar/>
        </div>
        <div className='bg-blue-gray-50 w-full lg:w-4/5 flex flex-col items-center'>
          <div id="displayRentalsRequests" className="flex flex-col w-full">
            {rentalRequests.length == 0 ? <h1>No Requests</h1> :
              rentalRequests.map(request => {
                return (
                  <div id="rentalRequestCard" key={request._id} className="flex m-4 rounded-lg shadow-lg">
                    <div id="displayDetails" className='flex-[3] w-full p-4'>
                      <Typography variant='h2'>{request.carDetails.make}</Typography>
                      <Typography variant='h4'>{request.carDetails.model}</Typography>
                      <Typography variant='h6'>{(new Date(request.desired_pickup_date)).toDateString()}</Typography>
                      
                    </div>
                    <div id='decision' className='flex flex-col flex-1 w-full  gap-4 justify-center'>
                      <Button color='green'>Accept</Button>
                      <Button color='red'>Decline</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rentals
