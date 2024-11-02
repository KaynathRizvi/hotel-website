import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import SignUpForm from '../SignUp/SignUpForm';
import PopupMessage from '../PopupMessage/PopupMessage';
import './Login.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            setLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        if (!email || !password) {
            setMessage('All fields are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8081/login', { email, password });
            setMessage(response.data.message);
            if (response.data.message === 'Login Successful') {
                setLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
            }
        } 
        catch (error) {
            setMessage('Error occurred while logging in');
            console.error('Error:', error);
        }
    }

    const toggleSignUpForm = () => {
        setShowSignUpForm(!showSignUpForm);
    }

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
    }

    const handleCloseMessage = () => {
        setMessage('');
    }

    return (
        <div className="login">
            {loggedIn && (
                <div>
                    <p>You are logged in</p>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            )}
            {!loggedIn && (
                <div className="login-form">
                    <h1 className="log-in1">Log In</h1>
                    <div className="login-frame-group">
                        <div className="login-following-group">
                            <div className="login-group">
                                <form onSubmit={handleSubmit} className="l-frame-group-following">
                                    <div className="login-get-started">
                                        <div className="login-email-frame">
                                            <input className="login-email-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
                                            <div className='login-email-icon'></div>
                                        </div>
                                        <div className="login-password-frame">
                                            <input className="login-password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            <div className='login-password-icon'></div>
                                        </div>
                                    </div>
                                    <Button type="submit" className="login-button-frame" variant="primary">Log In</Button>
                                </form>
                            </div>
                        </div>
                        <div className="login-rectangle-shape">
                            <div className="l-following1">Don’t have an account?</div>
                            <div className="l-following2" onClick={toggleSignUpForm}>Sign Up</div>
                        </div>
                    </div>
                </div>
            )}
            <img className="log-in-child" alt="" src="/login.jpg" />
            {showSignUpForm && (
                <div className="popup-overlay">
                    <div className="popup-form">
                        {/* Add close button */}
                        <div className='fa-close-icon'>
                        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleSignUpForm} />
                         </div>
                        <SignUpForm />
                    </div>
                </div>
            )}
            {message && (
                <PopupMessage message={message} onClose={handleCloseMessage} showOkButton={message.includes('Successful')} />
            )}
    </div>
    );
}

export default LoginForm;
