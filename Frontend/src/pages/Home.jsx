import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Typography, Button } from '@material-tailwind/react';

const Home = () => {
  const backgroundImage = {
    backgroundImage: `url(/src/assets/images/homepage.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  };

  return (
    <div style={backgroundImage}>
        <NavBar></NavBar>
        <div className='bg-gray-600 bg-opacity-50 -mt-2 flex justify-center' style={{
            height : 'calc(100vh - 57px)'
        }}>
            <div className='bg-white h-4/6 my-10 w-4/5 rounded bg-opacity-80 flex flex-col items-center'>
                <Typography variant='h2' className='mt-32 text-center'>Car Rental Mangement</Typography>
                <Button className='bg-red-400 border-2 border-red-400 hover:bg-white hover:text-black transition duration-300 ease-in-out mt-8'><Link to='/dashboard'>Rent a Car</Link></Button>
            </div>
        </div>
    </div>
  );
};

export default Home;
