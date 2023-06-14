import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {

    console.log(cart, price, 'parts are here from');

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure()
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')






    useEffect(() => {
        if (price > 0) {
            axiosSecure
                .post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('PaymentMethod', paymentMethod);
        }

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            })



    }

    return (
        < >
            <form className='w-2/3 m-10' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-4 btn-sm btn-primary' type="submit" disabled={!stripe}>
                    Pay ${price}
                </button>
            </form>
            {
                cardError && <p className='text-red-400 ml-8'>{cardError}</p>
            }
            {/* {transactionId && <p className='text-green-500 ml-8'>Transaction completed with transactionId: {transactionId}</p>} */}
        </>
    );
};

export default CheckoutForm;