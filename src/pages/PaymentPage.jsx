import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { show, date, selectedTime, selectedSeats } = location.state || {};

  if (!show || !selectedTime || !selectedSeats || !date) {
    return <p>Booking information is missing. Please go back and try again.</p>;
  }

  const ticketPrice = show.movie.price || 10;
  const totalAmount = selectedSeats.length * ticketPrice;

  const handlePayment = () => {
    alert('Payment Successful!');
    navigate('/my-bookings');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
      <p><strong>Movie:</strong> {show.movie.title}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {selectedTime.time}</p>
      <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
      <p className="mt-4 text-xl font-semibold">Total: ${totalAmount}</p>

      <button
        onClick={handlePayment}
        className="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-primary-dull"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
