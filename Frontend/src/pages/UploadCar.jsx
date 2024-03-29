import AppBar from "../components/AppBar"
import SideBar from "../components/SideBar"
import { Button, Input, Textarea, Typography } from "@material-tailwind/react" 
import { useState } from "react"
import { sendFormDataRequest } from "../services/HttpProvider"
const UploadCar = () => {

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [licensePlate, setLicensePlate ] = useState('');
  const [vin, setVin] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [rentalRate, setRentalRate] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("make", make);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("licensePlate", licensePlate);
    formData.append("vin", vin);
    formData.append("currentCondition", condition);
    formData.append("rentalRate", rentalRate);
    formData.append("description", description);
    formData.append("location", location);
    for(let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    const {status, responseBody} = await sendFormDataRequest("/cars", 'POST', formData);
    if (status >= 400){
      alert(`Error: ${responseBody.error}`);
    } else{
      alert(`${responseBody.message}`);
    }
  }

  return (
    <div className='flex flex-col h-screen w-screen justify-between'>
      <div>
        <AppBar title={"Upload Car"}></AppBar>
      </div>
      <div className='flex justify-between h-full'>
        <div className='bg-blue-gray-900 hidden md:block md:w-1/5 lg:w-1/5 '>
          <SideBar/>
        </div>
        <div className='bg-blue-gray-50 w-full lg:w-4/5 flex flex-col items-center min-h-max min-w-max overflow-y-scroll py-5'>
            <form className="flex flex-col gap-2 items-center" id={'uploadForm'}>
                <Typography variant="h4" className="mt-2">Enter Car Details</Typography>
                <div className="flex flex-col gap-4">
                <Input value={make} onChange={e => setMake(e.target.value)} label="Car Name (make)"/>
                <Input value={model} onChange={e => setModel(e.target.value)} label="Model"/>
                <Input value={year} onChange={e => setYear(e.target.value)} label="Year" type="number" min={1900} max={2023}/>
                <Input value={licensePlate} onChange={e => setLicensePlate(e.target.value)} label="License Plate"/>
                <Input value={vin} onChange={e => setVin(e.target.value)} label="VIN (Vehicle Identification Number)"/>
                <Input value={location} onChange={e => setLocation(e.target.value)} label="Location"/>
                <Input value={condition} onChange={e => setCondition(e.target.value)} label="Current Condition"/>
                <Input value={rentalRate} onChange={e => setRentalRate(e.target.value)} label="Rental Rate" type="number"/>
                <Input onChange={e => setImages(e.target.files)} label="Images" type='file' multiple/>
                <Textarea value={description} onChange={e => setDescription(e.target.value)} label="Description"/>
                <Button color="red" onClick={handleUpload}>UPLOAD</Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default UploadCar
