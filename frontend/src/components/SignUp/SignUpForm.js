import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LoginForm from '../Login/LoginForm';
import PopupMessage from '../PopupMessage/PopupMessage';
import './SignUp.css';

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const passwordPattern = /^(?=.*[0-9]).{5,}$/;

        if (!name || !email || !password || !confirmPassword) {
            setMessage('All fields are required');
            return;
        }

        if (!emailPattern.test(email)) {
            setMessage('Invalid email format. Please enter a valid email address.');
            return;
        }
    
        if (!email.includes('@') || !email.includes('.com')) {
            setMessage('Email must contain "@" and ".com".');
            return;
        }
    
        if (!passwordPattern.test(password)) {
            setMessage('Password must be at least 5 characters long and contain at least 1 number.');
            return;
        }
    
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8081/signup', { name, email, password });
            setMessage(response.data.message);
            if (response.data.message === 'Signup Successful') {
                setLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
            }
        } catch (error) {
            setMessage('Error occurred while signing up');
            console.error('Error:', error);
        }
    }
    

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    }
    const handleCloseMessage = () => {
        setMessage('');
    }

    return (
        <div className="sign-up">
            {loggedIn && (
                <div>
                    <p>You are logged in</p>
                    <Button onClick={() => setLoggedIn(false)}>Logout</Button>
                </div>
            )}
            {!loggedIn && (
                <div className="signup-form">
                    <h1 className="sign-up1">Register</h1>
                    <div className="signup-frame-group">
                        <div className="signup-following-group">
                            <div className="signup-group">
                                <form onSubmit={handleSubmit} className="s-frame-group-following">
                                    <div className="signup-get-started">
                                    <div className="signup-name-frame">
                                            <input className="signup-name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                                        </div>
                                        <div className="signup-email-frame">
                                            <input className="signup-email-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
                                            <div className='signup-email-icon'></div>
                                        </div>
                                        <div className="signup-password-frame">
                                            <input className="signup-password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                            <div className='signup-password-icon'></div>
                                            <div className="confirm-password-frame">
                                                <input className="confirm-password-input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                                                <div className='confirm-password-icon'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button type="submit" className="signup-button-frame" variant="primary">Sign Up</Button>
                                </form>
                            </div>
                        </div>
                        <div className="signup-rectangle-shape">
                            <div className="s-following1">Already have an account ?</div>
                            <div className="s-following2" onClick={toggleLoginForm}>Log In</div>
                        </div>
                    </div>
                </div>
            )}
            <img className="sign-up-child" alt="" src="/signup.jpg" />
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
            {message && (
                <PopupMessage message={message} onClose={handleCloseMessage} showOkButton={message.includes('Successful')} />
            )}
        </div>
    );
}

export default SignUpForm;
