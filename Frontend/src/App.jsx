import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" exact Component={Home} />
      <Route path="/login" exact Component={Login} />
      <Route path="/signup" exact Component={Register} />
      <Route path="/dashboard" exact Component={Dashboard} />
		</Routes>
    </BrowserRouter>
  )
}

export default App
