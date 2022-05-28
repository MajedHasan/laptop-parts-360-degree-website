import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Purchase = () => {

    const [parts, setParts] = useState({})
    const [canOrder, setCanOrder] = useState(false)
    const [totalPriceState, setTotalPriceState] = useState(0)
    const { id } = useParams()
    const [user, loading] = useAuthState(auth)


    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setParts(data)
            })
    }, [id])


    if (loading) {
        return <Loading></Loading>
    }


    const handleQuantity = event => {
        const quantity = event.target.value
        if (quantity >= parseInt(parts?.minOrderQuantity) && quantity <= parseInt(parts?.quantity) && quantity >= '1') {
            const price = parts?.price
            const newTotalPrice = price * quantity
            setTotalPriceState(newTotalPrice)
            setCanOrder(true)
        }
        else {
            toast.warn("Order Quantity can be less than Quantity and grater than Minimum Order Quantity")
            setCanOrder(false)
        }
    }

    const handleBook = async (event) => {
        event.preventDefault()
        const quantity = event.target.quantity.value
        const order = {
            name: user?.displayName,
            email: user?.email,
            phone: event.target.phone.value,
            address: event.target.address.value,
            quantity: quantity,
            productId: id,
            price: parts?.price,
            partsName: parts?.name,
            totalPrice: totalPriceState,
            paymentStatus: 'unpaid',
            orderStatus: 'inProgress'
        }

        await fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success("Your Order has been Placed Successfully")
                    parts.quantity = parts.quantity - quantity
                    event.target.reset()
                    setTotalPriceState(0)

                    const newParts = {
                        name: parts.name,
                        price: parts.price,
                        quantity: parts.quantity,
                        minOrderQuantity: parts.minOrderQuantity,
                        img: parts.img,
                        description: parts.description
                    }

                    fetch(`http://localhost:5000/parts/${id}`, {
                        method: "PATCH",
                        headers: {
                            'Content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(newParts)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.modifiedCount || data?.upsertedCount) {
                                toast.success("Product update also")
                            }
                        })

                }
            })
    }


    return (
        <section className="my-8">
            <div className="container mx-auto px-5">
                <div className="shadow rounded p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <img src={parts?.img} alt="" className='w-full mb-3' />
                        <h2 className="text-2xl font-bold text-teal-400">{parts?.name}</h2>
                        <h2 className="text-3xl font-bold">Price: ${parts?.price}</h2>
                        <p><small>Minimum Order Quantity: <span className='font-bold'>{parts?.minOrderQuantity}</span></small></p>
                        <p>Available Quantity: <span className="font-bolr">{parts?.quantity}</span></p>
                        <p>{parts?.description}</p>
                    </div>
                    <div>
                        <h2 className='mb-4 text-center text-2xl'>Book Now This Parts</h2>
                        <form onSubmit={handleBook}>
                            <label htmlFor="">Name</label>
                            <input type="text" value={user?.displayName} className="input input-bordered w-full mb-3" disabled />
                            <label htmlFor="">Email</label>
                            <input type="email" value={user?.email} className="input input-bordered w-full mb-3" disabled />

                            <input type="number" placeholder="Phone" name='phone' className="input input-bordered w-full mb-3" />

                            <input type="number" placeholder="Order Quantity" onChange={handleQuantity} name='quantity' className="input input-bordered w-full mb-3" />

                            <input type="text" placeholder="Address" name='address' className="input input-bordered w-full mb-3" />

                            <label htmlFor="">Unit Price</label>
                            <input type="number" value='15' className="input input-bordered w-full mb-3" disabled />
                            <label htmlFor="">Total Price</label>
                            <input type="number" value={totalPriceState} name='totalPrice' id='totalPrice' className="input input-bordered w-full mb-3" disabled />

                            <button className="btn bg-teal-500 border-teal-500 text-white mx-auto block" disabled={canOrder ? false : true}>Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;