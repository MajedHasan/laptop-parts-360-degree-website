import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({ review }) => {
    // const { _id, start, reviewText } = review
    return (
        <div className='shadow-md rounded-xl p-6 text-center'>
            <div className='text-center mb-3'>
                {
                    review?.rating === '1' && <>
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                    </>
                }
                {
                    review?.rating === '2' && <>
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                    </>
                }
                {
                    review?.rating === '3' && <>
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                    </>
                }
                {
                    review?.rating === '4' && <>
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-slate-700" />
                    </>
                }
                {
                    review?.rating === '5' && <>
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                        <FontAwesomeIcon icon={faStar} className="text-2xl text-orange-500" />
                    </>
                }
            </div>
            <h2 className='text-xl font-bold text-teal-600'>{review?.name}</h2>
            <p >
                {review?.reviewText}
            </p>
        </div>
    );
};

export default ReviewCard;