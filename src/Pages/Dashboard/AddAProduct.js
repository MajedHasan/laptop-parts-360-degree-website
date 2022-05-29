import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageStorageKey = '856ec68363f9976cee894136de3d7aef'


    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const parts = {
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        minOrderQuantity: data.minOrderQuantity,
                        img: img,
                        description: data.description
                    }

                    fetch('https://agile-tor-39199.herokuapp.com/parts', {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(parts)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted?.insertedId) {
                                toast.success("Parts Added Successfully")
                                reset()
                            }
                        })
                }
            })
    }


    return (
        <section className="my-2">
            <div className="container mx-auto p-5">
                <h2 className="text-center font-bold text-3xl text-teal-600 mb-8">Add A Product</h2>
                <div className="box shadow rounded-lg p-6 max-w-sm w-full mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                        }
                        <input type="text" placeholder="Name" name='name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required"
                                }
                            })
                            }
                            className="input input-bordered w-full mb-3" />

                        {
                            errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>
                        }
                        <input type="number" placeholder="Unit Price" name='price'
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "Price is Required"
                                }
                            })
                            }
                            className="input input-bordered w-full mb-3" />

                        {
                            errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>
                        }
                        <input type="number" placeholder="Quantity" name='quantity'
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is Required"
                                }
                            })
                            }
                            className="input input-bordered w-full mb-3" />

                        {
                            errors.minOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrderQuantity.message}</span>
                        }
                        <input type="number" placeholder="Minimum Order Quantity"
                            {...register("minOrderQuantity", {
                                required: {
                                    value: true,
                                    message: "Minimum Order Quantity is Required"
                                }
                            })
                            }
                            name='minOrderQuantity' className="input input-bordered w-full mb-3" />

                        {
                            errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>
                        }
                        <label htmlFor="">Image</label>
                        <input type="file" name='image' className="input input-bordered w-full mb-3"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is Required"
                                }
                            })
                            }
                        />

                        {
                            errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>
                        }
                        <textarea className="textarea textarea-bordered w-full mb-3" placeholder="Description"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is Required"
                                }
                            })
                            }
                        ></textarea>

                        <button className="btn bg-green-500 border-green-500 text-white block mx-auto">Add Product</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAProduct;