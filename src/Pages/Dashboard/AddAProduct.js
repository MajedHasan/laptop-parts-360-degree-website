import React from 'react';

const AddAProduct = () => {
    return (
        <section className="my-2">
            <div className="container mx-auto p-5">
                <h2 className="text-center font-bold text-3xl text-teal-600 mb-8">Add A Product</h2>
                <div className="box shadow rounded-lg p-6 max-w-sm w-full mx-auto">
                    <form >
                        <input type="text" placeholder="Name" name='name' class="input input-bordered w-full mb-3" />
                        <input type="number" placeholder="Unit Price" name='price' class="input input-bordered w-full mb-3" />
                        <input type="number" placeholder="Quantity" name='quantity' class="input input-bordered w-full mb-3" />
                        <input type="number" placeholder="Minimum Order Quantity" name='minQuantity' class="input input-bordered w-full mb-3" />
                        <label htmlFor="">Image</label>
                        <input type="file" name='image' class="input input-bordered w-full mb-3" />
                        <textarea class="textarea textarea-bordered w-full mb-3" placeholder="Description"></textarea>
                        <button className="btn bg-green-500 border-green-500 text-white block mx-auto">Add Product</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAProduct;