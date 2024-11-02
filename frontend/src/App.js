import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Dining from './components/Dining/Dining';
import Contact from './components/Contact/Contact';
import LoginForm from './components/Login/LoginForm';
import SignUpForm from './components/SignUp/SignUpForm';
import Booking from './components/Booking/Booking';
import StandardRoomForm from './components/Rooms/StandardRoomForm';
import ConfirmationForm from './components/ConfirmationForm/ConfirmationForm'; 
import Availability from './components/Availability/Availability';
import RoomCatalog from './components/RoomCatalog/RoomCatalog';

function App() {
  
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/availability" element={<Availability />} /> 
          <Route path="/booking" element={<Booking />} /> 
          <Route path="/confirmation" element={<ConfirmationForm />} /> 
          <Route path="/roomcatalog" element={<RoomCatalog />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;