import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('https://agile-tor-39199.herokuapp.com/reviews', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <section className='my-12'>
            <div className="container mx-auto px-4">
                <h2 className='text-4xl font-bold text-center mb-6'>What <span className="text-teal-600">O</span>ur <span className="text-teal-600">C</span>ustomers Says?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        reviews?.slice(0, 6)?.map(review => <ReviewCard
                            key={review?._id}
                            review={review}
                        ></ReviewCard>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Reviews;