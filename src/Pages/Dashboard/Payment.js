import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const { id } = useParams()

    return (
        <section className="my-8">
            <div className="container mx-auto px-5">
                <div className="w-full max-w-md mx-auto p-4 shadow rounded">
                    <h2 className='text-2xl text-teal-500 text-center mb-4'>Please Pay for <span className="font-semibold">{id}</span> Order</h2>
                    <div className="">
                        <form >
                            <button className="btn btn-teal-500 w-full">Pay Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;