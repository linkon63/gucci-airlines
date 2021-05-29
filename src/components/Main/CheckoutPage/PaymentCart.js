import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { addToBookingList } from '../../../redux/actions/airLinesBookingAction';

export const PaymentCart = ({ orderDetails }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const temporaryBookingData = useSelector(state => state.airlinesReducers.temporaryBookingList[0])

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
      const bookingData = {...temporaryBookingData, paymentId, paymentWith}
      dispatch(addToBookingList(bookingData))
    }
  };

  useSelector(state => console.log(state))

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-dark mt-3" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="pt-4 text-primary text-center">{success}</p>
      <p className="pt-4 text-danger text-center">{error}</p>
    </form>
  );
};