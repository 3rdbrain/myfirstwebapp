import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your-publishable-key-here');

export default function Payment() {
  return (
	<section className="p-8">
	  <h2 className="text-3xl font-semibold text-center">Payment</h2>
	  <div className="mt-8 max-w-md mx-auto">
		<Elements stripe={stripePromise}>
		  <CheckoutForm />
		</Elements>
	  </div>
	</section>
  );
}