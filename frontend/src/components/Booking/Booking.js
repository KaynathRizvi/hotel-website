import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Booking.css';
import PaymentForm from '../PaymentForm/PaymentForm';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

const Booking = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [checkInDate, setcheckInDate] = useState('');
  const [checkOutDate, setcheckOutDate] = useState('');
  const [adults, setadults] = useState('');
  const [children, setchildren] = useState('');
  const [rooms, setrooms] = useState('');
  const [roomType, setroomType] = useState('');
  const [totalPrice, settotalPrice] = useState('');
  const roomPrices = {
    standardRoom: 2000,
    vistaRoom: 3500,
    dualBedroom: 3000,
    deluxeRoom: 4000,
  };

  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNo: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    adults: 1,
    children: 0,
    rooms: 1,
    roomType: 'standardRoom', 
    totalPrice: 0,
    emailError: '',
  });

  useEffect(() => {
    const { rooms, roomType } = formData;
    const pricePerRoom = roomPrices[roomType] || 0;
    const totalPrice = pricePerRoom * rooms;
    setFormData(prevState => ({
      ...prevState,
      totalPrice
    }));
  }, [formData.rooms, formData.roomType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
  
    if (name === 'checkInDate') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        checkOutDate: '' // Reset check-out date when check-in date changes
      }));
    } else if (name === 'checkOutDate') {
      const checkInDate = new Date(formData.checkInDate);
      const selectedDate = new Date(value);
      const twoDaysLater = new Date(checkInDate);
      twoDaysLater.setDate(twoDaysLater.getDate() + 2);

      if (selectedDate <= checkInDate || selectedDate > twoDaysLater) {
        return;
      }
    }

    if (name === 'contactNo') {
      const isValidNumber = /^\d{0,10}$/.test(value);
      if (!isValidNumber) {
        return;
      }
    }

    if (name === 'email') {
      const isValidEmail = /\S+@\S+\.\S+/.test(value);
      setFormData(prevState => ({
        ...prevState,
        email: value,
        emailError: isValidEmail ? '' : 'Invalid email address'
      }));
      return;
    }
  
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirmation(true);

    const { firstName, lastName, checkInDate, checkOutDate, adults, children, rooms, roomType, totalPrice, contactNo, email } = formData;
    if (!firstName || !lastName || !checkInDate || !checkOutDate || !adults || !children || !rooms || !roomType || !totalPrice || !contactNo || !email ) {
      return;
    }
    setShowForm(true);
    try {
      const response = await axios.post('http://localhost:8081/booking', { firstName, lastName, checkInDate, checkOutDate, adults, children, rooms, roomType, totalPrice, contactNo, email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error occurred while logging in');
      console.error('Error:', error);
    }
  };

  const handleClosePopup = () => {
    setShowForm(false); 
  }
  
  return (
    <div className="booking-page">
      <h2>Booking Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Check-in Date:</label>
          <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required />
        </div>
        <div className="form-group">
          <label>Check-out Date:</label>
          <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} min={formData.checkInDate} required />
        </div>
        <div className="form-group">
          <label>Adults:</label>
          <input type="number" name="adults" value={formData.adults} onChange={handleChange} min="1" max="2" required />
        </div>
        <div className="form-group">
          <label>Children:</label>
          <input type="number" name="children" value={formData.children} onChange={handleChange} min="0" max="1" />
        </div>
        <div className="form-group">
          <label>Number of Rooms:</label>
          <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min="1" max="2" required />
        </div>
        <div className="form-group">
          <label>Room Type:</label>
          <div>
            <label><input type="radio" name="roomType" value="standardRoom" checked={formData.roomType === 'standardRoom'} onChange={handleChange}/>Standard Room</label>
          </div>
          <div>
            <label> <input type="radio" name="roomType" value="vistaRoom" checked={formData.roomType === 'vistaRoom'} onChange={handleChange}/>Vista Room</label>
          </div>
          <div>
            <label><input type="radio" name="roomType" value="dualBedroom" checked={formData.roomType === 'dualBedroom'} onChange={handleChange}/>Dual Bedroom</label>
          </div>
          <div>
            <label><input type="radio" name="roomType" value="deluxeRoom" checked={formData.roomType === 'deluxeRoom'} onChange={handleChange}/>Deluxe Room</label>
          </div>
        </div>
        <div className="form-group">
          <label>Total Price:</label>
          <input type="text" value={formData.totalPrice} disabled />
        </div>
        <div className="form-group">
          <label>Contact No:</label>
          <input type="tel" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        {formData.emailError && <div className="email-message" style={{ color: 'red' }}>{formData.emailError}</div>}
        <div className="form-group">
          <button type="submit">Book Now</button>
        </div>
      </form>
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <div className='fa-close-icon'>
              <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleClosePopup} />
            </div>
            <PaymentForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
