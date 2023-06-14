import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import useCard from '../../hooks/useCard';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Paynment = () => {
    const [cart] = useCard();
    const location = useLocation();
    const cartData = location.state;
    // const { name, image, students, price, seats, instructor_name } = cartData
    console.log(cartData, ' i have got hte data here');
    const price = parseFloat(cartData.price);
    const name = cartData.name;
    const id = cartData._id;


    // const [cart] = useCart();
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2));



    return (
        <div className='w-full'>
            <h2 className='text-2xl font-bold text-center my-10'>Pay now</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} name={name} id={id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Paynment;