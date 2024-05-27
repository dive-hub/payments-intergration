const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/my-server/create-paypal-order', async (req, res) => {
  const order = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer access_token$sandbox$9bxqb6kxs3zy54ws$8bd35152f62f2aacb4556d8837586089`
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [{
        items: req.body.cart.map(item => ({
          name: item.sku,
          quantity: item.quantity,
          unit_amount: {
            currency_code: 'USD',
            value: '10.00' // Replace with actual item price
          }
        })),
        amount: {
          currency_code: 'USD',
          value: '10.00' // Replace with total amount
        }
      }]
    })
  }).then(res => res.json());

  res.json({ id: order.id });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
