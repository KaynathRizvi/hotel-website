import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dining.css';

const Dining = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/breakfast.jpg',
    '/in-room.jpg',
    '/restaurant.jpg', 
  ];

  const imageDescriptions = [
    'Culinary Delights',
    'In-Room Dining',
    'Restaurant', 
  ];

  const descriptions = [
    'Explore our diverse dining options, featuring delicious breakfasts, satisfying lunches, and exquisite dinners crafted by our talented chefs. Whether you are craving comfort food or gourmet cuisine, we have something to satisfy every palate. Elevate your stay with our culinary delights!',
    'Relax and Dine at Your Own Pace with In-Room Service. From business meetings to relaxed brunches, our in-room dining service offers the ultimate convenience, allowing you to dine at your own pace without ever having to leave your room.',
    'Experience comfort and elegance at our restaurant, where every detail is crafted to enhance your dining experience. Enjoy a delightful meal in a cozy setting that feels just like home.',
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
    <div className='dining-page'>
      <div className='dining-content'>
        <div className='dining-label'>Dining</div>
        <div className='dining-desc'>
          Discover exceptional dining experiences at our hotel's enticing culinary offerings.
        </div>
        <div className='dining-container'>
          <div className='dining-image-container'>
            <img src={images[currentImage]} alt={imageDescriptions[currentImage]} className='img-dining' />
            <div className='dining-dots-container'>
            {images.map((_, index) => (<div key={index} className={`dining-dot ${currentImage === index ? 'active' : ''}`} onClick={() => handleDotClick(index)}/>))}
            </div>
          </div>
          <div className='dining-text'>
            <div className='hotel-dining'>{imageDescriptions[currentImage]}</div>
            <div className='hotel-dining-desc'>{descriptions[currentImage]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
