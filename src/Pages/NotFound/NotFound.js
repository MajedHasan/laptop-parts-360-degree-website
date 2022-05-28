import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/3747371.jpg'

const NotFound = () => {
    return (
        <section className="my-8">
            <div className="container mx-auto px-5">
                <div className="max-w-2xl w-full shadow rounded p-4 text-center mx-auto">
                    <img src={notFoundImg} alt="" className='w-full mb-4' />
                    <h2 className='text-4xl font-bold'>The page your are visited is not found or wrong Link</h2>
                    <Link to="/" className="text-2xl text-teal-400 font-semibold underline">Please Go to Home Page</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;