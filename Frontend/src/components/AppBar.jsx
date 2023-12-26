import { List, ListItem, Typography, Button} from '@material-tailwind/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logoutAccount } from '../services/AuthenticationProvider';

function AppBar(props) {
    const [expand, setExpand] = useState(false);
    const navigate = useNavigate();
    const handleLogout = async () => {
        logoutAccount(navigate);
    }
    return (
        <div>
        <div className='shadow-md bg-white flex justify-between'>
            <Typography variant='h4' className='p-2'>{props.title}</Typography>
            <div className='flex'>
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
            <div className='md:flex hidden gap-5 p-3'>
                <div>
                    <Link to={"/"}>HOME</Link>
                </div>
                <div>
                    <Link to={"/notifications"} className='transition duration-300 ease-in-out bg-red-400 border-red-400 border-2 p-2 rounded text-white hover:bg-white hover:text-black'>NOTIFICATIONS</Link>
                </div>
                <div>
                    <Link to={"/login"} className='transition duration-300 ease-in-out border-2 border-red-400 p-2 rounded hover:bg-red-400 hover:text-white '>LOGOUT</Link>
                </div>
            </div>
            </div>
        </div>
             {expand && <List className='font-bold md:hidden'>
                <ListItem><Link to='/'>HOME</Link></ListItem>
                <ListItem><Link to='/upload'>UPLOAD CAR</Link></ListItem>
                <ListItem><Link to='/book'>BOOK CAR</Link></ListItem>
                <ListItem><Link to='/dashboard'>DASHBOARD</Link></ListItem>
                <ListItem onClick={handleLogout}>LOGOUT</ListItem>
            </List>}
        </div>
    )
}

export default AppBar
