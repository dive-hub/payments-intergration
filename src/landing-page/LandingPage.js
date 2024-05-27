import React from 'react';
import PayPalButton from '../paypal/PayPalButton.js';
import '../page-styles/LandingPage.css';
    
const LandingPage = () => {
  const cart = [
    { sku: 'YOUR_PRODUCT_STOCK_KEEPING_UNIT', quantity: 'YOUR_PRODUCT_QUANTITY' }
  ];

  return (
    <div className="container">
      <h1>Welcome to Our Payment Page</h1>
      <p>Please use the button below to complete your payment with PayPal.</p>
      <PayPalButton cart={cart} />
    </div>
  );
};

export default LandingPage;

