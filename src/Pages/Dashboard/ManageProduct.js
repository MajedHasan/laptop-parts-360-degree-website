import React from 'react';

const ManageProduct = () => {
    return (
        <section className="my-8">
            <div className="container mx-auto px-5">
                <div className="w-full max-w-md mx-auto shadow rounded p-4">
                    <h2 className="text-center text-2xl mb-4 ">Update Product</h2>
                    <form >
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" name='name' class="input input-bordered w-full mb-3" />
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder="Price" name='price' class="input input-bordered w-full mb-3" />
                        <label htmlFor="">Quantity</label>
                        <input type="number" placeholder="Quantity" name='quantity' class="input input-bordered w-full mb-3" />
                        <label htmlFor="">Minimum Order Quantity</label>
                        <input type="text" placeholder="Minimum Order Quantity" name='minOrderQuantity' class="input input-bordered w-full mb-3" />
                        <label htmlFor="">Description</label>
                        <textarea class="textarea textarea-bordered mb-3 w-full" placeholder="Description"></textarea>
                        <button className="w-full btn bg-teal-500 border-teal-500 text-white">Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ManageProduct;