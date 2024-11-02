import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import StandardRoomForm from './StandardRoomForm';
import DualBedRoomForm from './DualBedRoomForm';
import VistaRoomForm from './VistaRoomForm';
import DeluxeRoomForm from './DeluxeRoomForm';

const Rooms = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [showForms, setShowForms] = useState([false, false, false, false]); // State to manage pop-up visibility for each room
  const [showKnowMore, setShowKnowMore] = useState([true, true, true, true]); // State to manage visibility of "Know More" button for each room

  const images = [
    '/rooms.jpg',
    '/twinroom.jpg',
    '/viewroom.jpg', 
    '/deluxeroom.jpg', 
  ];

  const imageDescriptions = [
    'Standard Room',
    'Dual-Bed Room',
    'Vista Room',
    'Deluxe Room', 
  ];

  const descriptions = [
    'Our Standard Rooms offer a cozy and inviting atmosphere, providing all the essential amenities for a comfortable stay.',
    'Our Dual-Bed Rooms feature two separate beds ideal for friends or family traveling together. ',
    'Immerse yourself in the beauty of our surroundings while enjoying the comfort and convenience of our well-appointed accommodations.',
    'Elevate your stay with our Deluxe Rooms, offering refined elegance and luxurious amenities.',  
  ];

  const buttonTexts = [
    'Know More',
    'Know More', 
    'Know More',
    'Know More',
  ];

  const handleKnowMore = (index) => {
    const newShowForms = [...showForms];
    newShowForms[index] = true;
    setShowForms(newShowForms);

    const newShowKnowMore = [...showKnowMore];
    newShowKnowMore[index] = false;
    setShowKnowMore(newShowKnowMore);
  };

  const handleClosePopup = (index) => {
    const newShowForms = [...showForms];
    newShowForms[index] = false;
    setShowForms(newShowForms);

    const newShowKnowMore = [...showKnowMore];
    newShowKnowMore[index] = true;
    setShowKnowMore(newShowKnowMore);
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='room-page'>
      <div className='room-content'>
        <div className='label'>Rooms & Rates</div>
        <div className='label-desc'>
          Discover serenity and sophistication in our well-appointed rooms, complemented by competitive rates for an unparalleled stay experience.
        </div>
        <div className='room-container'>
          <div className='room-text'>
            <div className='hotel-room'>{imageDescriptions[currentImage]}</div>
            <div className='room-desc'>{descriptions[currentImage]}</div>
            <div className='room-know-more'>
              {showKnowMore[currentImage] && (
                <button onClick={() => handleKnowMore(currentImage)}>{buttonTexts[currentImage]}</button>
              )}
            </div>
          </div>
          <div className='room-image-container'>
            <img src={images[currentImage]} alt={imageDescriptions[currentImage]} className='img-room' />
            <div className='room-dots-container'>
              {images.map((_, index) => (<div key={index} className={`room-dot ${currentImage === index ? 'active' : ''}`} onClick={() => handleDotClick(index)}/>))}
            </div>
          </div>
        </div>
      </div>
      {showForms.map((showForm, index) => (showForm && (
          <div key={index} className="popup-overlay">
            <div className="popup-form">
              <div className='fa-close-icon'>
              <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={() => handleClosePopup(index)} />
              </div>
              {index === 0 && <StandardRoomForm />}
              {index === 1 && <DualBedRoomForm />}
              {index === 2 && <VistaRoomForm />}
              {index === 3 && <DeluxeRoomForm />}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Rooms;
