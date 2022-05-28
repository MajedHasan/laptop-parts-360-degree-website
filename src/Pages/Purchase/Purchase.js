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
        fetch(`http://localhost:5000/parts/${'id'}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {

            })
        setParts({
            id: 1234,
            img: 'https://api.lorem.space/image/shoes?w=400&h=225',
            name: 'name',
            price: 15,
            quantity: 50,
            minOrderQuantity: 5,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo molestiae dignissimos ad voluptate animi quod accusantium ullam quia doloremque similique iure, consequuntur itaque asperiores nam maxime labore voluptas, vel assumenda porro. Alias explicabo error harum?'
        })
    }, [])


    if (loading) {
        return <Loading></Loading>
    }


    const handleQuantity = event => {
        const quantity = event.target.value
        if (quantity < parts.minOrderQuantity || quantity > parts.quantity || quantity < 1) {
            toast.warn("Order Quantity can be less than Quantity and grater than Minimum Order Quantity")
            setCanOrder(false)
        }
        else {
            const price = parts?.price
            const newTotalPrice = price * quantity
            setTotalPriceState(newTotalPrice)
            setCanOrder(true)
        }
    }
    const handleBook = async (event) => {
        event.preventDefault()
        const phone = event.target.phone.value
        const address = event.target.address.value
        const quantity = event.target.quantity.value
        const price = parts?.price
        const partsName = parts?.name
        const totalPrice = totalPriceState
        const order = {
            name: user?.displayName,
            email: user?.email,
            phone: phone,
            address: address,
            quantity: quantity,
            productId: id,
            price: price,
            partsName: partsName,
            totalPrice: totalPrice,
        }

        toast.success("Your Order has been Placed Successfully")
        parts.quantity = parts.quantity - quantity
        event.target.reset()
        setTotalPriceState(0)

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
                toast.success("Your Order has been Placed Successfully")
                parts.quantity = parts.quantity - quantity
                event.target.reset()
                setTotalPriceState(0)
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