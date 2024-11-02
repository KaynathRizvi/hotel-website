import React from 'react'
import './Service.css';

const Service = () => {
  return (
      <div className="service-page">
        <div className="service-name">
          <div className="facilities">Facilities</div>
        </div>
        <div className='service-content'>
          <div className="service-wrapper">
            <img className="restaurant-svg" loading="lazy" alt="" src="/restaurant.svg" />
            <img className="pool-svg" loading="lazy" alt="" src="/pool.svg" />
            <img className="wifi-svg" loading="lazy" alt="" src="/wifi.svg" />
            <img className="fitness-svg" loading="lazy" alt="" src="/gym.svg" />
            <img className="taxi-svg" loading="lazy" alt="" src="/taxi.svg" />
            <img className="parking-svg" loading="lazy" alt="" src="/parking.svg" />
          </div>
          <div className='facility-label'>
            <div className="restaurant-label">Dining</div>
            <div className="pool-label">Pool</div>
            <div className="wifi-label">Wifi</div>
            <div className="gym-label">Gym</div>
            <div className="taxi-label">Taxi</div>
            <div className="parking-label">Parking</div>
          </div>
        </div>
      </div>
  );
};

export default Service
