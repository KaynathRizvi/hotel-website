import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Booking from '../Booking/Booking';
import './Availability.css';
import rooms from '../../assets/rooms.jpg';
import room01 from '../../assets/room01.jpg';
import room02 from '../../assets/room02.jpg';
import dual1 from '../../assets/dual1.jpg';
import dual2 from '../../assets/dual2.jpg';
import dual3 from '../../assets/dual3.jpg';
import vista1 from '../../assets/vista1.jpg';
import vista2 from '../../assets/vista2.jpg';
import vista3 from '../../assets/vista3.jpg';
import deluxe1 from '../../assets/deluxe1.jpg';
import deluxe2 from '../../assets/deluxe2.jpg';
import deluxe3 from '../../assets/deluxe3.jpg';

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
        <img src={rooms} alt="Standard Room" />
        <h2>Standard Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 2000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={dual1} alt="Dual Bedroom" />
        <h2>Dual Bedroom</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3500/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={vista1} alt="Vista Room" />
        <h2>Vista Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={deluxe1} alt="Deluxe Room" />
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
        <img src={room01} alt="Standard Room" />
        <h2>Standard Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 2000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={dual2} alt="Dual Bedroom" />
        <h2>Dual Bedroom</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3500/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={vista2} alt="Vista Room" />
        <h2>Vista Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={deluxe2} alt="Deluxe Room" />
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
        <img src={room02} alt="Standard Room" />
        <h2>Standard Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 2000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={dual3} alt="Dual Bedroom" />
        <h2>Dual Bedroom</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3500/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={vista3} alt="Vista Room" />
        <h2>Vista Room</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Price: 3000/night</p>
        <Button onClick={handleBookNowClick}>Book Now</Button>
      </div>
      <div className="room">
        <img src={deluxe3} alt="Deluxe Room" />
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
