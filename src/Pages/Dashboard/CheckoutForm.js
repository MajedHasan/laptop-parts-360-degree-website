import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const { _id, totalPrice, name, email } = order


    useEffect(() => {
        fetch(`https://agile-tor-39199.herokuapp.com/create-payment-intent`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setSuccess('')

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        )

        if (intentError) {
            setCardError(intentError?.message)
            setSuccess('')
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your payment is completed.')

            const payment = {
                transactionId: paymentIntent.id,
                paymentStatus: 'paid',
                orderStatus: 'pending'
            }

            fetch(`https://agile-tor-39199.herokuapp.com/orders/${_id}`, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Your Payment is Confirm")
                })
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='border-teal-500 rounded p-3'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4'
                                },
                            },
                            invalid: {
                                color: '#9e2146'
                            }
                        }
                    }}
                />
                <button className="btn btn-teal-500 w-full mt-5" type='submit' disabled={!stripe || !clientSecret || success}>Pay Now</button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your Transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;