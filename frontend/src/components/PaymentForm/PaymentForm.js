import React, { useState } from 'react';
import './PaymentForm.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
    upiId: '',
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "cardHolder") {
      newValue = value.replace(/[^a-zA-Z]/g, '');
    } else if (name === "upiId") {
      newValue = value.replace(/[^a-zA-Z0-9@._]/g, '');
    } else if (name === "cvv" || name === "cardNumber") {
      newValue = value.replace(/\D/g, '');
    } else if (name === "expirationDate") {
      const formattedValue = value
        .replace(/\D/g, '') // Removing non-numeric characters
        .replace(/(\d{2})(\d)/, '$1/$2') // Adding slash between month and year
        .replace(/(\d{2})\/(\d{2})(\d{4})/, '$1/$3'); // Limiting year to 4 digits
      newValue = formattedValue;
    }

    setPaymentData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleMethodChange = (e) => {
    const { value } = e.target;
    setPaymentMethod(value);
    setPaymentData({
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: '',
      upiId: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'creditCard') {
      const { cardNumber, cardHolder, expirationDate, cvv } = paymentData;
      if (!cardNumber || !cardHolder || !expirationDate || !cvv) {
        setErrorMessage('All fields are required');
        return;
      }
    } else if (paymentMethod === 'upi') {
      const { upiId } = paymentData;
      if (!upiId) {
        setErrorMessage('UPI ID is required');
        return;
      } else if (!upiId.includes('@')) {
        setErrorMessage('UPI ID must contain "@" symbol');
        return;
      }
    }

    setErrorMessage('');
    setShowForm(true);
  };

  const handleClosePopup = () => {
    setShowForm(false);
  };

  return (
    <div className="payment-form">
      <h2>Enter Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Payment Method:</label>
          <div>
            <label>
              <input type="radio" name="paymentMethod" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={handleMethodChange} />
              Credit Card
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="upi" checked={paymentMethod === 'upi'} onChange={handleMethodChange} />
              UPI
            </label>
          </div>
        </div>
        {paymentMethod === 'creditCard' && (
          <>
            <div className="form-group">
              <label>Card Number:</label>
              <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} maxLength={16} minLength={16} required />
            </div>
            <div className="form-group">
              <label>Cardholder Name:</label>
              <input type="text" name="cardHolder" value={paymentData.cardHolder} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Expiration Date:</label>
              <input type="text" name="expirationDate" value={paymentData.expirationDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>CVV:</label>
              <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} maxLength={3} minLength={3} required />
            </div>
          </>
        )}
        {paymentMethod === 'upi' && (
          <div className="form-group">
            <label>UPI ID:</label>
            <input type="text" name="upiId" value={paymentData.upiId} onChange={handleChange} required />
          </div>
        )}
        <div className="form-group">
          <button type="submit">Pay Now</button>
        </div>
      </form>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <div className='fa-close-icon'>
              <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleClosePopup} />
            </div>
            <ConfirmationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
