import {Button, Input, Typography} from "@material-tailwind/react"
import { useState } from "react"
import {Link} from "react-router-dom"
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {

    }
    return (
        <div className='bg-red-400 h-screen flex justify-center items-center'>
            <div className='w-4/5 sm:w-3/5 md:w-2/5 lg:w-2/6 p-4 min-h-60 -mt-48 py-10 bg-white flex flex-col gap-6 items-center'>
                <Typography variant='h5' className='pt-3'>Login</Typography>
                <div className='w-4/5 flex flex-col gap-4'>
                    <Input variant='outlined' label='Username' type='email' color='blue' value={username} onChange={e => setUsername(e.target.value)}></Input>
                    <Input variant='outlined' label='password' type='password' color='blue' value={password} onChange={e => setPassword(e.target.value)}></Input>
                    <Button onClick={handleLogin} color='red' className='transition duration-300 ease-in-out hover:bg-white hover:text-black border-2 border-red-400'>Login</Button>
                </div>
                    <p>Dont have an account? <Link to={"/signup"} className='text-blue-800'>Create an account</Link></p>
            </div>
        </div>
    )
}

export default Login
