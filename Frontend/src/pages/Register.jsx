import { useState } from 'react'
import {Button, Input, Typography} from "@material-tailwind/react"
import {Link} from "react-router-dom"
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const handleRegister = async () => {

    }
    return (
        <div className='bg-red-400 h-screen flex justify-center items-center'>
            <div className='w-4/5 sm:w-3/5 md:w-2/5 lg:w-2/6 p-4 min-h-60 -mt-52 bg-white flex flex-col gap-6 items-center'>
                <Typography variant='h5' className='pt-3'>Signup</Typography>
                <div className='w-4/5 flex flex-col gap-4'>
                    <Input variant='outlined' label='Username' color='blue' value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                    <Input variant='outlined' label='Password' type='password' color='blue' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                    <Input variant='outlined' label='Retype-password' type='password' color='blue' value={retypePassword} onChange={e => setRetypePassword(e.target.value)}></Input>
                    <Input variant='outlined' label='Full Name' type='text' color='blue' value={fullName} onChange={e => setFullName(e.target.value)}></Input>
                    <Input variant='outlined' label='Contact Number' color='blue' value={contactNumber} onChange={e => setContactNumber(e.target.value)}></Input>
                    <Button color='red' className='transition duration-300 ease-in-out hover:bg-white hover:text-black border-2 border-red-400'><Link onClick={handleRegister}>Signup</Link></Button>
                </div>
                <p>Already have an account? <Link to={"/login"} className='text-blue-800'>Login here</Link></p>
            </div>
        </div>
    )
}

export default Register
