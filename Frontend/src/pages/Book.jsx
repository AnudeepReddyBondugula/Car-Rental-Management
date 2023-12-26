import { Input, Typography, Button } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import { verifyAndRedirect } from '../services/AuthenticationProvider'
import { useNavigate } from 'react-router'
import SideBar from '../components/SideBar'

const Book = () => {
  const navigate = useNavigate();
  const [carName, setCarName] = useState('');
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  const [rentalRate, setRentalRate] = useState(1000);

  const handleSearch = async () => {
    
  }

  useEffect(() => {
    verifyAndRedirect(navigate, null, '/login');
  }, [navigate])

  useEffect(() => {
    const searchString = window.location.search;
    const searchParams = new URLSearchParams(searchString);
    setCarName(searchParams.get('carName'));
    setModel(searchParams.get('model'));
    setLocation(searchParams.get('location'));
    setRentalRate(searchParams.get('rentalRate'));
    handleSearch();
  }, [])

  
  return (
    <div className='flex flex-col h-screen w-screen justify-between'>
      <div>
        <AppBar title={"Booking"}></AppBar>
      </div>
      <div className='flex justify-between h-full'>
        <div className='bg-blue-gray-900 hidden md:block md:w-2/5 lg:w-1/5 '>
          <SideBar/>
        </div>
        <div className='bg-blue-gray-50 w-full lg:w-4/5 flex flex-col items-center min-h-max min-w-max'>
          <div className='flex flex-col gap-2 p-3 items-center lg:flex-row'>
            <div className='flex flex-col gap-2 sm:flex-row'>
              <Input type='search' label='Car name' size='lg' value={carName} onChange={e => setCarName(e.target.value)}></Input>
              <Input type='search' label='Model' size='lg' value={model} onChange={e => setModel(e.target.value)}></Input>
            </div>
            <div className='flex flex-col gap-2 sm:flex-row'>
              <Input type='search' label='Location' size='lg' value={location} onChange={e => setLocation(location)}></Input>
              <Input type='number' label='Rental Rate' min={1000} size='lg' value={rentalRate} onChange={e => setRentalRate(rentalRate)}></Input>
            </div>
            <Button color='red' className='w-1/2' onClick={handleSearch}>Search</Button>
          </div>
          <div id='searchResult'>
            {}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
