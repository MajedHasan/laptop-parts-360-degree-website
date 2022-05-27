import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({ review }) => {
    // const { _id, start, reviewText } = review
    return (
        <div className='shadow-md rounded-xl p-6 text-center'>
            <div className='text-center mb-3'>
                <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
            </div>
            <h2 className='text-xl font-bold text-teal-600'>Majed Hasan</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi consequatur minus esse asperiores totam perferendis ea dolores quod voluptas?</p>
        </div>
    );
};

export default ReviewCard;