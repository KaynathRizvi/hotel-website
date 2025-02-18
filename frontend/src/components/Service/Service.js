import React from 'react'
import './Service.css';
import restauranticon from '../../assets/restaurant.svg'
import poolicon from '../../assets/pool.svg'
import wifiicon from '../../assets/wifi.svg'
import gymicon from '../../assets/gym.svg'
import taxiicon from '../../assets/taxi.svg'
import parkingicon from '../../assets/parking.svg'

const Service = () => {
  return (
      <div className="service-page">
        <div className="service-name">
          <div className="facilities">Facilities</div>
        </div>
        <div className='service-content'>
          <div className="service-wrapper">
            <img className="restaurant-svg" loading="lazy" alt="" src={restauranticon} />
            <img className="pool-svg" loading="lazy" alt="" src={poolicon} />
            <img className="wifi-svg" loading="lazy" alt="" src={wifiicon} />
            <img className="fitness-svg" loading="lazy" alt="" src={gymicon} />
            <img className="taxi-svg" loading="lazy" alt="" src={taxiicon} />
            <img className="parking-svg" loading="lazy" alt="" src={parkingicon} />
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
