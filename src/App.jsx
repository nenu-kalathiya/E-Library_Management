import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY'); // Replace with your actual Stripe public key

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <div>
        <Navbar />
        <Hero />
        <Services />
      </div>
    </Elements>
  );
};

export default App;
