import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import './ConfirmationForm.css';

function ConfirmationForm() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/bookings'); // Update the endpoint to match your backend
        setBookingData(response.data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchData();
  }, []);

  const generatePDF = () => {
    if (bookingData.length === 0) {
      console.log('No booking data available. Please wait for the data to be fetched.');
      return;
    }

    const pdf = new jsPDF();

    let y = 10;
    bookingData.forEach((booking, index) => {
      Object.entries(booking).forEach(([key, value]) => {
        pdf.text(`${key}: ${value}`, 10, y + (index * 10));
      });
    });
    pdf.save('booking_data.pdf');
  };
  const handleClose = () => {
    window.location.href = '/'; // Navigate to the home page
  };
  
  return (
    <div className="success-message">
      <p>Booking Successful! Please ensure to download the PDF.</p>
      <button className="generate" onClick={generatePDF}>Generate PDF</button>
      <p>The confirmation message has been sent to your email. Kindly present it during check-in.</p>
        <p className="cancellation-message">
          For cancellation requests, kindly send your booking PDF to 
          <a href="mailto:cancellation@thegrandhotel.com"> thegrandhotel@gmail.com </a> 
          and provide details regarding your reasons for cancellation. 
          <p>Upon approval, refunds will be initiated within 2-3 business days.</p>
          <p>Please note that cancellations made less than 24 hours prior to the scheduled check-in date are not permitted.</p>
        </p>
        <button className="close-button" onClick={handleClose}>Close</button>
    </div>

  );
}

export default ConfirmationForm;