import React from 'react';
import './PopupMessage.css';

function PopupMessage({ message, onClose, showOkButton }) {
    const handleOkButtonClick = () => {
        onClose(); // Close the popup message
        window.location.href = '/'; // Redirect to the homepage
    };

    return (
        <div className="popup-message">
            <div className="popup-message-content">
                <p>{message}</p>
                {showOkButton ? (
                    <button onClick={handleOkButtonClick}>OK</button>
                ) : (
                    <button onClick={onClose}>Close</button>
                )}
            </div>
        </div>
    );
}

export default PopupMessage;
