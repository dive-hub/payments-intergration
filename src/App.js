import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import LandingPage from '../src/landing-page/LandingPage';

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
      <div className="App">
        <LandingPage />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
