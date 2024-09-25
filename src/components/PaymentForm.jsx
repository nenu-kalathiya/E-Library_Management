// PaymentForm.js
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ onPaymentSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      console.log('Payment Method:', paymentMethod);
      onPaymentSuccess(); // Notify parent component of successful payment
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border rounded-md p-2">
        <CardElement className="p-2" />
      </div>
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80 w-full"
        disabled={!stripe}
      >
        Subscribe
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="text-gray-500 mt-2 hover:text-black w-full"
      >
        Cancel
      </button>
    </form>
  );
};

export default PaymentForm;
