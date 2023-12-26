import React from 'react'
import { List, ListItem } from '@material-tailwind/react'
const SideBar = () => {
  return (
    <div>
      <List className='text-white font-bold'>
        <ListItem className='border-white border-b-2 rounded-none'>Upload Car</ListItem>
        <ListItem className='border-white border-b-2 rounded-none'>Book a Car</ListItem>
        <ListItem className='border-white border-b-2 rounded-none'>Rentals</ListItem>
        <ListItem className='border-white border-b-2 rounded-none'>Edit Car Details</ListItem>
      </List>
    </div>
  )
}

export default SideBar
