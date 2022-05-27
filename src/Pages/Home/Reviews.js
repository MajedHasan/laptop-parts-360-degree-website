import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    return (
        <section className='my-12'>
            <div className="container mx-auto px-4">
                <h2 className='text-4xl font-bold text-center mb-6'>What <span className="text-teal-600">O</span>ur <span className="text-teal-600">C</span>ustomers Says?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <ReviewCard></ReviewCard>
                </div>
            </div>
        </section>
    );
};

export default Reviews;