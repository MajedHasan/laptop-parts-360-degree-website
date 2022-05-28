import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/parts', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json())
    )


    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDeleteParts = async (id) => {
        fetch(`http://localhost:5000/parts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success("This product has been deleted")
            })
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
                                        <button onClick={() => handleDeleteParts(parts?._id)} className='btn btn-xs bg-red-500 border-red-500 text-white'> Delete </button>
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default ManageProducts;