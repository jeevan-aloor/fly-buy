import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const { data } = await axios.post('https://calm-teal-beanie.cyclic.app/api/payments', {
      token: paymentMethod.id,
      amount: 10
    });

    if (data.success) {
      alert('Payment processed successfully');
    } else {
      setError(data.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
