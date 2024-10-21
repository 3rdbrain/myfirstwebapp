import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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
	  setError(error.message);
	} else {
	  setError(null);
	  setSuccess(true);
	  // Handle payment processing here
	}
  };

  return (
	<form onSubmit={handleSubmit}>
	  <CardElement />
	  <button
		type="submit"
		disabled={!stripe}
		className="mt-4 p-2 bg-blue-500 text-white rounded"
	  >
		Pay
	  </button>
	  {error && <div className="mt-2 text-red-500">{error}</div>}
	  {success && <div className="mt-2 text-green-500">Payment successful!</div>}
	</form>
  );
}