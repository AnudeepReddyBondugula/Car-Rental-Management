import AppBar from "../components/AppBar"
import SideBar from "../components/SideBar"

const EditCar = () => {
  return (
    <div className='flex flex-col h-screen w-screen justify-between'>
      <div>
        <AppBar title={"Edit Car Details"}></AppBar>
      </div>
      <div className='flex justify-between h-full'>
        <div className='bg-blue-gray-900 hidden md:block md:w-2/5 lg:w-1/5 '>
          <SideBar/>
        </div>
        <div className='bg-blue-gray-50 w-full lg:w-4/5 flex flex-col items-center min-h-max min-w-max'>
        </div>
      </div>
    </div>
  )
}

export default EditCar
