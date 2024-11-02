import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Booking from '../Booking/Booking';
import './Rooms.css';

const VistaRoomForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBookNow = () => {
    setShowForm(true); // Show the popup form when "Book Now" is clicked
  };

  const handleClosePopup = () => {
    setShowForm(false); // Close the popup form when the close button is clicked
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className='form-page'>
      <h2>Vista Room</h2>
      <div className='form-img'>
        <img src='/vista1.jpg' alt='' className='img-style' onClick={() => handleImageClick('/vista1.jpg')} />
        <img src='/vista2.jpg' alt='' className='img-style' onClick={() => handleImageClick('/vista2.jpg')} />
        <img src='/vista3.jpg' alt='' className='img-style' onClick={() => handleImageClick('/vista3.jpg')} />
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
            <Booking selectedImage={selectedImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VistaRoomForm;