import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/pool.jpg',
    '/residence.jpg',
    '/cafe.jpg', 
    '/gym.jpg',
  ];

  const imageDescriptions = [
    'Hotel Pool',
    'Residencies',
    'Dining', 
    'Fitness Center',
  ];

  const descriptions = [
    'Dive into relaxation at our luxurious hotel pool, where crystal-clear waters invite you to unwind and soak up the sun in style.',
    'Experience unparalleled comfort and sophistication in our exclusive residencies, where luxury meets tranquility for an unforgettable stay.',
    'Indulge in a culinary journey at our exquisite dining venues, where expert chefs craft delectable dishes that tantalize your taste buds and leave you craving for more.',
    'Energize your stay with our state-of-the-art fitness center, equipped with modern amenities to help you stay active and rejuvenated during your travels.',
  ];

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='about-page'>
      <div className='about-content'>
        <div className='about-label'>Explore</div>
        <div className='about-desc'>
          Our signature wellness programs empower you to maintain your routine, no matter where you travel.
        </div>
        <div className='about-container'>
          <div className='about-image-container'>
            <img src={images[currentImage]} alt={imageDescriptions[currentImage]} className='img-pool' />
            <div className='about-dots-container'>
            {images.map((_, index) => (<div key={index} className={`about-dot ${currentImage === index ? 'active' : ''}`} onClick={() => handleDotClick(index)}/>))}
            </div>
          </div>
          <div className='pool-text'>
            <div className='hotel-pool'>{imageDescriptions[currentImage]}</div>
            <div className='pool-desc'>{descriptions[currentImage]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
