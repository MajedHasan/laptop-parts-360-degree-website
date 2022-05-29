import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const { id } = useParams()
    const [order, setOrder] = useState({})
    const stripePromise = loadStripe('pk_test_51L3JMJLBUumQ6bLElQ9LVcHDPqd6mOd9H54FfdItAcn4aDJyF8QJ6cdA5bx57a6D0E5d5YC29J9acerBEf3E5WVu00N0pidGsf');


    useEffect(() => {
        fetch(`https://agile-tor-39199.herokuapp.com/order/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])


    return (
        <section className="my-8">
            <div className="container mx-auto px-5">
                <div className="w-full max-w-md mx-auto p-4 shadow rounded">
                    <h2 className='text-2xl text-teal-500 text-center mb-4'>Please Pay for <span className="font-semibold">{id}</span> Order</h2>

                    <div className="my-5">
                        <h4 className='text-2xl font-bold'> Order Info</h4>
                        <h2 className='text-sm font-bold'>Unit Price: ${order?.price}</h2>
                        <p className='text-sm'>Product: {order?.partsName}</p>
                        <p className='text-sm'>Quantity: {order?.quantity}</p>
                        <p className='text-sm'>Total Price: {order?.totalPrice}</p>
                    </div>

                    <div className="my-5">
                        <h4 className='text-2xl font-bold'> Your Info</h4>
                        <p className='text-sm'>Name: {order?.name}</p>
                        <p className='text-sm'>Email: {order?.email}</p>
                        <p className='text-sm'>Phone: {order?.phone}</p>
                        <p className='text-sm'>Address: {order?.address}</p>
                    </div>

                    <div className="my-5">
                        <h4 className='text-2xl font-bold'>Pay via Credit/ Debit Card</h4>
                    </div>

                    <div className="shadow-lg rounded p-4">
                        <Elements stripe={stripePromise} >
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;