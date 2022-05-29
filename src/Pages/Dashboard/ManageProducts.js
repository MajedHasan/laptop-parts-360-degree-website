import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';

const ManageProducts = () => {

    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://agile-tor-39199.herokuapp.com/parts', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json())
    )


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className="my-orders">
            <h2 className="text-3xl text-center font-semibold mb-6">Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length < 1 ? <>
                                <tr>
                                    <td colSpan='7' className='text-center text-2xl text-red-500 font-bold'>There is no Products</td>
                                </tr>
                            </>
                                :
                                products?.map((parts, index) => <tr key={parts?._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img src={parts?.img} alt="" className='w-full max-w-[40px]' />
                                    </td>
                                    <td>{parts?.name}</td>
                                    <td>{parts?.quantity}</td>
                                    <td>$<span className='font-semibold text-slate-700'>{parts?.price}</span></td>
                                    <td>
                                        <Link to={`/dashboard/manageProducts/${parts?._id}`} className="btn btn-xs bg-slate-800 border-slate-800 text-white">Manage</Link>
                                    </td>
                                    <td>
                                        <label htmlFor="deleteProductModal"
                                            onClick={() => setDeleteProduct(parts)}
                                            className="btn btn-xs bg-red-500 border-none text-white"
                                        >Delete</label>
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>

                {
                    deleteProduct && <DeleteProductModal
                        deleteProduct={deleteProduct}
                        setDeleteProduct={setDeleteProduct}
                        refetch={refetch}
                    ></DeleteProductModal>
                }

            </div>
        </section >
    );
};

export default ManageProducts;