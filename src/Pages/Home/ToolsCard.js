import React from 'react';
import { Link } from 'react-router-dom';

const ToolsCard = ({ tools }) => {

    // const { _id, img, name, price, minOrderQTY, quantity, description } = tools

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-3xl">Name</h2>
                <h3 className='text-orange-400 text-2xl font-bold'>Price: $20</h3>
                <p><small>Min order Quantity: <span className='font-bold'>5</span></small></p>
                <p><small>Available Quantity: <span className='font-bold'>50</span></small></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem in odio magnam cum, est non aperiam eos corrupti tempora similique veritatis id nostrum ipsa.</p>
                <div className="card-actions">
                    <Link to={`/purchase/:id`} className="btn btn-primary bg-green-400 border-green-400 text-white">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;