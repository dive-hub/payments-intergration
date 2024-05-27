import React, { useEffect, useState } from 'react';
import { loadScript } from '@paypal/paypal-js';

const PayPalButton = ({ cart }) => {
  const [paypal, setPaypal] = useState(null);

  useEffect(() => {
    loadScript({ clientId: 'AasxQyMQtRiY8UUNlr-GEN0jk2qIK55wvRYu7rGPfnvfCloRoOzRnbOE9aJHI3xmptqrAu5D7fEKLLRt' })
      .then((paypal) => {
        setPaypal(paypal);
      })
      .catch((error) => {
        console.error('failed to load the PayPal JS SDK script', error);
      });
  }, []);

  useEffect(() => {
    if (paypal) {
      paypal.Buttons({
        createOrder: (data, actions) => {
          return fetch('/my-server/create-paypal-order', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart }),
          })
            .then((response) => response.json())
            .then((order) => order.id);
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
        onError: (err) => {
          console.error('An error occurred during the transaction', err);
        },
      }).render('#paypal-button-container');
    }
  }, [paypal, cart]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
