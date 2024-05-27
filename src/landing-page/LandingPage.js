import React from 'react';
import PayPalButton from '../paypal/PayPalButton.js';
import '../page-styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Welcome to Our Payment Page</h1>
      <p>Please use the button below to complete your payment with PayPal.</p>
      <PayPalButton amount="10.00" />
    </div>
  );
};

export default LandingPage;
