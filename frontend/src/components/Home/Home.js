import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';
import RoomSearchBar from '../RoomSearchBar/RoomSearchBar';
import About from '../About/About';
import Rooms from '../Rooms/Rooms';
import Dining from '../Dining/Dining';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import LoginForm from '../Login/LoginForm';


const Home = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numRooms, setNumRooms] = useState(1);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); 

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    toggleLoginForm(); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleGuestIncrement = (type) => {
    switch (type) {
      case 'adults':
        setNumAdults((prevNum) => prevNum + 1);
        break;
      case 'children':
        setNumChildren((prevNum) => prevNum + 1);
        break;
      case 'rooms':
        setNumRooms((prevNum) => prevNum + 1);
        break;
      default:
        break;
    }
  };

  const handleGuestDecrement = (type) => {
    switch (type) {
      case 'adults':
        setNumAdults((prevNum) => Math.max(1, prevNum - 1));
        break;
      case 'children':
        setNumChildren((prevNum) => Math.max(0, prevNum - 1));
        break;
      case 'rooms':
        setNumRooms((prevNum) => Math.max(1, prevNum - 1));
        setNumAdults((prevNumAdults) => Math.min(4, prevNumAdults));
        break;
      default:
        break;
    }
  }; 

  const handleInputClick = () => {
    setShowGuestDropdown(!showGuestDropdown);
  };

  const handleRoomSearch = (query) => {
    console.log('Searching for rooms with availability:', query);
    navigate('/Availability')
  };

  const handleSearch = () => {
    handleRoomSearch(searchQuery);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`background-image-container ${isScrolled ? 'scrolled' : ''}`}>
        {/* Primary navigation bar */}
        <div className='primary-navigation-links'>
          <span className='hotel-name'>The Grand Hotel</span>
          <Link onClick={() => window.scrollTo({ top: 966, behavior: "smooth" })}>Explore</Link>          
          <Link onClick={() => window.scrollTo({ top: 1932, behavior: "smooth" })}>Rooms</Link>     
          <Link onClick={() => window.scrollTo({ top: 2898, behavior: "smooth" })}>Dining</Link>  
          <Link to="/roomcatalog">Book Now</Link>     
          <Link onClick={() => window.scrollTo({ top: 3864, behavior: "smooth" })}>Contact</Link>     
            <Link onClick={toggleLoginForm}>Login/Register</Link> 
          {showLoginForm && (
            <div className="popup-overlay">
              <div className="popup-form">
                <div className='fa-close-icon'>
                  <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleLoginForm} />
                </div>
                <LoginForm />
              </div>
            </div>
          )}
        </div>
        {/* Secondary navigation bar */}
        <div className={`secondary-navigation-links ${isScrolled ? 'visible' : ''}`}>
          <span className='second-hotel-name'>The Grand Hotel</span>
          <div className='secondary-links'>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>     
          <Link onClick={() => window.scrollTo({ top: 966, behavior: "smooth" })}>Explore</Link>     
          <Link onClick={() => window.scrollTo({ top: 1932, behavior: "smooth" })}>Rooms</Link>     
          <Link onClick={() => window.scrollTo({ top: 2898, behavior: "smooth" })}>Dining</Link>  
          <Link to="/roomcatalog">Book Now</Link>     
          <Link onClick={() => window.scrollTo({ top: 3864, behavior: "smooth" })}>Contact</Link>     
          <Link onClick={toggleLoginForm}>Login/Register</Link>
          {showLoginForm && (
            <div className="popup-overlay">
              <div className="popup-form">
                <div className='fa-close-icon'>
                  <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleLoginForm} />
                </div>
                <LoginForm />
              </div>
            </div>
          )}
          </div>
         </div> 
        {/* Description */}
        <div className='desc'>
            <span className='desc1'>Welcome to Grand Hotel</span>
            <p className='desc2'>Discover unparalleled luxury and timeless elegance at The Grand Hotel, where every moment is a celebration of opulence and sophistication.</p>
        </div>
        {/* Check-in, Check-out, and Guest containers */}
        <div className='check-container'>
          {/* Check-in container */}
          <div className='check-in-container'>
            <span className="material-symbols-outlined">calendar_month</span>
            <div>
              <span>Check-In Date</span>
              <DatePicker selected={checkInDate} onChange={handleCheckInDateChange} placeholderText="DD/MM/YYYY" />
            </div>
          </div>
          {/* Check-out container */}
          <div className='check-out-container'>
            <span className="material-symbols-outlined">calendar_month</span>
            <div>
              <span>Check-Out Date</span>
              <DatePicker selected={checkOutDate} onChange={handleCheckOutDateChange} placeholderText="DD/MM/YYYY " />
            </div>
          </div>
          {/* Guest container */}
          <div className='guest-container'>
          <span className="material-symbols-outlined">group</span>
            <div>
              <span>Guests</span>
              <input type='text' value={`Adult: ${numAdults}, Children: ${numChildren}, Room: ${numRooms}`} onClick={handleInputClick} readOnly />
              <div className={`dropdown-content ${showGuestDropdown ? 'open' : ''}`}>
                <div>
                  <span>Adults</span>
                  <div>
                    <button onClick={() => handleGuestDecrement('adults')}>-</button>
                    <span>{numAdults}</span>
                    <button onClick={() => handleGuestIncrement('adults')}>+</button>
                  </div>
                </div>
                <div>
                  <span>Childrens</span>
                  <div>
                    <button onClick={() => handleGuestDecrement('children')}>-</button>
                    <span>{numChildren}</span>
                    <button onClick={() => handleGuestIncrement('children')}>+</button>
                  </div>
                </div>
                <div>
                  <span>Rooms</span>
                  <div>
                    <button onClick={() => handleGuestDecrement('rooms')}>-</button>
                    <span>{numRooms}</span>
                    <button onClick={() => handleGuestIncrement('rooms')}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
            <div className="room-search-bar">
              <RoomSearchBar onSearch={handleRoomSearch} />
              <div className='search-icon'>
              <span className="material-symbols-outlined">search</span>
              </div>
              <button onClick={handleSearch}>View Availability</button>
            </div>
          </div>
        </div>
        <About /> 
        <Rooms />
        <Dining />
        <Service />
        <Contact />
      </div>
      
    );
  };
  
  export default Home;