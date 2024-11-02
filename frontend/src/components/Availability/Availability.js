import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Booking from '../Booking/Booking';
import './Availability.css';

function Availability() {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };
  const handleClosePopup = () => {
    setShowForm(false); // Close the popup form when the close button is clicked
  };

  return (
    <div className='availability-page'>
    <div className='section01'>
      <div className="room">
        <img src='/rooms.jpg' alt="Standard Room" />
        <h2>Standard Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 2000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='/dual1.jpg' alt="Dual Bedroom" />
        <h2>Dual Bedroom</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3500/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='/vista1.jpg' alt="Vista Room" />
        <h2>Vista Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='deluxe1.jpg' alt="Deluxe Room" />
        <h2>Deluxe Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 4000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
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
    </div>
    <div className='section02'>
      <div className="room">
        <img src='/room01.jpg' alt="Standard Room" />
        <h2>Standard Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 2000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='/dual2.jpg' alt="Dual Bedroom" />
        <h2>Dual Bedroom</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3500/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='/vista2.jpg' alt="Vista Room" />
        <h2>Vista Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='deluxe2.jpg' alt="Deluxe Room" />
        <h2>Deluxe Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 4000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
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
    </div>
    <div className='section03'>
      <div className="room">
        <img src='/room02.jpg' alt="Standard Room" />
        <h2>Standard Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 2000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='/dual3.jpg' alt="Dual Bedroom" />
        <h2>Dual Bedroom</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3500/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='/vista3.jpg' alt="Vista Room" />
        <h2>Vista Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src='deluxe3.jpg' alt="Deluxe Room" />
        <h2>Deluxe Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 4000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
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
    </div>
    </div>
  );
}

export default Availability;
