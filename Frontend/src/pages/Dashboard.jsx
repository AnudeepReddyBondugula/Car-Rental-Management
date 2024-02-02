import { Input, Typography, Button } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import { verifyAndRedirect } from '../services/AuthenticationProvider'
import { useNavigate } from 'react-router'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  const navigate = useNavigate();
  const [carName, setCarName] = useState('');
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  const [rentalRate, setRentalRate] = useState(1000);

  useEffect(() => {
    verifyAndRedirect(navigate, null, '/login');
  }, [navigate])

  const handleSearch = async () => {
    const searchParams = {
      carName,
      model,
      location,
      rentalRate
    }
    const queryString = new URLSearchParams(searchParams);
    navigate("/book?" + queryString)
  }
  return (
    <div className='flex flex-col h-screen w-screen justify-between'>
      <div>
        <AppBar title={"Dashboard"}></AppBar>
      </div>
      <div className='flex justify-between h-full'>
        <div className='bg-blue-gray-900 hidden md:block md:w-1/5 lg:w-1/5 '>
          <SideBar/>
        </div>
        <div className='bg-red-400 w-full md:w-full lg:w-4/5 flex justify-center min-h-max'>
          <div className='bg-white bg-opacity-90 w-full sm:w-5/6 md:w-4/5 min-h-max lg:w-2/3 p-2 mt-10 flex flex-col items-center gap-4'>
            <Typography variant='h2' className='mt-4'>Book a Car</Typography>
            <div className='w-5/6 flex flex-col gap-3'>
              <Input color='red' type='search' label='Enter car name' value={carName} onChange={e => setCarName(e.target.value)}></Input>
              <Input color='red' label='Model' value={model} onChange={e => setModel(e.target.value)}></Input>
              <Input color='red' label='Location' value={location} onChange={e => setLocation(e.target.value)}></Input>
              <Input color='red' type="number" label='Rental Rate (Min)' min={1000} value={rentalRate} onChange={e => setRentalRate(e.target.value)}></Input>
            </div>
            <div className='mb-2' onClick={handleSearch}><Button color='red'>Search</Button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
