import { Input, Typography, Button } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import { verifyAndRedirect } from '../services/AuthenticationProvider'
import { useNavigate } from 'react-router'
import SideBar from '../components/SideBar'
import { sendJsonRequest } from '../services/HttpProvider'
import CarCard from '../components/CarCard'

const YourCars = () => {
  const navigate = useNavigate();
  const [carsDetails, setCarsDetails] = useState(null);

  const fetchOwnedCars = async () => {
    const {status, responseBody} = await sendJsonRequest('/ownedcars');
    if (status >= 400) {
      console.error(responseBody.error)
      alert("Error: Failed to get car details");
    } else{
      setCarsDetails(responseBody.ownedCarsDetails);
    }
  }

  useEffect(() => {
    verifyAndRedirect(navigate, null, '/login');
  }, [navigate])

  useEffect(() => {
    fetchOwnedCars();
  }, [])

  
  return (
    <div className='flex flex-col h-screen w-screen justify-between'>
      <div>
        <AppBar title={"Your Cars"}></AppBar>
      </div>
      <div className='flex justify-between h-full'>
        <div className='bg-blue-gray-900 hidden md:block md:w-2/5 lg:w-1/5 '>
          <SideBar/>
        </div>
        <div className='bg-blue-gray-50 w-full lg:w-4/5 flex flex-col items-center min-h-max min-w-max'>
          <div id='searchResult' className=' overflow-y-auto mx-1 self-start my-3 rounded-lg w-[100dvw] md:w-[70dvw] p-3'>
            {carsDetails != null && <>{carsDetails.length == 0 ? <div>No Cars Found</div> : 
            <div className='flex flex-wrap justify-center sm:justify-start gap-2'>
              {carsDetails.map(car => {
                return <CarCard key={car._id} carDetails={car} update={true}></CarCard>
              })}
            </div> }</>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourCars
