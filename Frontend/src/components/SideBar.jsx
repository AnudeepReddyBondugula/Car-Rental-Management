import { List, ListItem } from '@material-tailwind/react'
import { useNavigate } from 'react-router'
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <List className='text-white font-bold'>
        <ListItem className='border-white border-b-2 rounded-none' onClick={()=>navigate('/dashboard')}>Dashboard</ListItem>
        <ListItem className='border-white border-b-2 rounded-none' onClick={()=>navigate('/upload')}>Upload Car</ListItem>
        <ListItem className='border-white border-b-2 rounded-none' onClick={()=>navigate('/book')}>Book a Car</ListItem>
        <ListItem className='border-white border-b-2 rounded-none' onClick={()=>navigate('/rentals')}>Rentals</ListItem>
        <ListItem className='border-white border-b-2 rounded-none' onClick={()=>navigate('/edit')}>Edit Car Details</ListItem>
      </List>
    </div>
  )
}

export default SideBar
