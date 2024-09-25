import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

const SubscriptionModal = ({ isOpen, onClose }) => {
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  if (!isOpen) return null;

  const handlePaymentSuccess = () => {
    setPaymentSuccessful(true);
  };

  const handleCancel = () => {
    setPaymentSuccessful(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Subscription Required</h2>
        {!isPaymentSuccessful ? (
          <>
            <p className="text-gray-700 mb-4">
              To read this book, please subscribe to our service.
            </p>
            <PaymentForm onPaymentSuccess={handlePaymentSuccess} onCancel={handleCancel} />
          </>
        ) : (
          <p className="text-green-500 mb-4">Payment Successful! Thank you for subscribing.</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionModal;
