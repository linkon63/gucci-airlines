import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export const PaymentCart = ({ orderDetails }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message)
      setSuccess(null)
    } else {
      setSuccess('Payment Successfully done')
      setError(null)
      const paymentId = paymentMethod.id;
      const paymentWith = paymentMethod.card.brand;
        
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-dark mt-3" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="success">{success}</p>
      <p className="error">{error}</p>
    </form>
  );
};