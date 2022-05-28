import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProduct = () => {

    // const { id } = useParams()
    const id = "6291f05fedc676b599ec5a76"
    const [parts, setParts] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setParts(data)
            })
    }, [])


    const handleUpdateProduct = async (event) => {
        event.preventDefault()

        const product = {
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            minOrderQuantity: event.target.minOrderQuantity.value,
            description: event.taget.description.value
        }

        await fetch(`http://localhost:5000/parts/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset()
                toast.success("Product update successfully")
            })
    }


    return (
        <section className="my-8">
            <div className="container mx-auto px-5">
                <div className="w-full max-w-md mx-auto shadow rounded p-4">
                    <h2 className="text-center text-2xl mb-4 ">Update Product</h2>
                    <form onSubmit={handleUpdateProduct}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" name='name' value={parts?.name} className="input input-bordered w-full mb-3" />
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder="Price" name='price' value={parts?.price} className="input input-bordered w-full mb-3" />
                        <label htmlFor="">Quantity</label>
                        <input type="number" placeholder="Quantity" name='quantity' value={parts?.quantity} className="input input-bordered w-full mb-3" />
                        <label htmlFor="">Minimum Order Quantity</label>
                        <input type="text" placeholder="Minimum Order Quantity" value={parts?.minOrderQuantity} name='minOrderQuantity' className="input input-bordered w-full mb-3" />
                        <label htmlFor="">Description</label>
                        <textarea className="textarea textarea-bordered mb-3 w-full" value={parts?.description} placeholder="Description"></textarea>
                        <button className="w-full btn bg-teal-500 border-teal-500 text-white">Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ManageProduct;