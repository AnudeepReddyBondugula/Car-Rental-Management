import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Book from "./pages/Book";
import UploadCar from "./pages/UploadCar";
import Rentals from "./pages/Rentals";
import EditCar from "./pages/EditCar";
import YourCars from "./pages/YourCars";
import Car from "./pages/Car";
function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" exact Component={Home} />
      <Route path="/login" exact Component={Login} />
      <Route path="/signup" exact Component={Register} />
      <Route path="/dashboard" exact Component={Dashboard} />
      <Route path="/book" exact Component={Book} />
      <Route path="/upload" exact Component={UploadCar} />
      <Route path="/rentals" exact Component={Rentals} />
      <Route path="/edit" exact Component={EditCar} />
      <Route path="/ownedcars" exact Component={YourCars} />
      <Route path='/car' exact Component={Car} />
		</Routes>
    </BrowserRouter>
  )
}

export default App
