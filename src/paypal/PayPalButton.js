import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount // Set the amount here
            }
          }]
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(details => {
          alert('Transaction completed by ' + details.payer.name.given_name);
          // Optionally, handle the transaction details here
        });
      }}
      onError={(err) => {
        console.error('An error occurred during the transaction', err);
      }}
    />
  );
};

export default PayPalButton;
