import React from 'react';
import { Link } from 'react-router-dom';

const ToolsCard = ({ tool }) => {

    const { _id, img, name, price, minOrderQuantity, quantity, description } = tool

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-3xl">{name}</h2>
                <h3 className='text-orange-400 text-2xl font-bold'>Price: ${price}</h3>
                <p><small>Min order Quantity: <span className='font-bold'>{minOrderQuantity}</span></small></p>
                <p><small>Available Quantity: <span className='font-bold'>{quantity}</span></small></p>
                <p>{description?.length > 60 ? `${description.slice(0, 60)}...` : description}</p>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`} className="btn btn-primary bg-green-400 border-green-400 text-white">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;