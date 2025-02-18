import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Booking from '../Booking/Booking';
import './Rooms.css';
import rooms from '../../assests/rooms.jpg'
import room01 from '../../assests/room01.jpg'
import room02 from '../../assests/room02.jpg'

const StandardRoomForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNow = () => {
    setShowForm(true); 
  };

  const handleClosePopup = () => {
    setShowForm(false);
  };

  return (
    <div className='form-page'>
      <h2>Standard Room</h2>
      <div className='form-img'>
        <img src={rooms} alt='' className='img-style' />
        <img src={room01} alt='' className='img-style' />
        <img src={room02} alt='' className='img-style' />
      </div>
      <div className='form-desc'>
        <p>
          Our Standard Rooms offer a cozy and inviting atmosphere, providing all the essential amenities for a comfortable stay.
        </p>
        <p>
          Our Twin Rooms feature two separate beds ideal for friends or family traveling together.
        </p>
        <p>
          Immerse yourself in the beauty of our surroundings while enjoying the comfort and convenience of our well-appointed accommodations.
        </p>
      </div>
      <button className="book-now-button" onClick={handleBookNow}>Book Now</button>
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <div className='fa-close-icon'>
              <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleClosePopup} />
            </div>
            <Booking />
          </div>
        </div>
      )}
    </div>
  );
};

export default StandardRoomForm;
