import { List, ListItem, Typography, Button} from '@material-tailwind/react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const [expand, setExpand] = useState(false);
    return (
        <div className='bg-white grid grid-cols-12 md:grid-cols-8 lg:grid-cols-12 p-2 border-x-2 border-black-600 shadow-md rounded'>
            <Typography variant='h4' className='col-span-8 md:col-span-5 lg:col-span-9 py-2'>Car Rental Management</Typography>
            <Button onClick={()=> setExpand(e => e ? false : true)} className='col-start-12 p-3 bg-white text-black md:hidden'>
            {expand ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12">
                </path>
            </svg> 
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
      </svg>}
            </Button>
            {expand && <List className='font-bold md:hidden'>
                <ListItem><Link to='/'>HOME</Link></ListItem>
                <ListItem><Link to='/login'>LOGIN</Link></ListItem>
                <ListItem><Link to='/signup'>SIGNUP</Link></ListItem>
            </List>}
            <div className='grid grid-cols-3 md:col-start-6 lg:col-start-10 col-span-3'>
                <div className='my-auto hidden md:flex justify-center col-span-1'>
                    <Link to={"/"}>HOME</Link>
                </div>
                <div className='my-auto hidden md:flex justify-center'>
                    <Link to={"/login"} className='transition duration-300 ease-in-out bg-red-400 border-red-400 border-2 p-2 rounded text-white hover:bg-white hover:text-black'>LOGIN</Link>
                </div>
                <div className='my-auto hidden md:flex justify-center'>
                    <Link to={"/signup"} className='transition duration-300 ease-in-out border-2 border-red-400 p-2 rounded hover:bg-red-400 hover:text-white '>SIGNUP</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
