import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const MyOrders = () => {

    const [user, loading] = useAuthState(auth)

    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`http://localhost:5000/orders/${user?.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json())
    )


    if (loading || isLoading) {
        return <Loading></Loading>
    }


    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Product has been deleted")
                console.log(data);
                refetch()
            })
    }


    return (
        <section className="my-orders">
            <h2 className="text-3xl text-center font-semibold mb-6">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.length < 1 ? <>
                                <tr>
                                    <td colSpan='7' className='text-center text-2xl font-semibold text-red-500'>You have not any order</td>
                                </tr>
                            </>
                                :
                                myOrders?.map((order, index) => <>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{order?.partsName}</td>
                                        <td>{order?.quantity}</td>
                                        <td>$<span className='font-semibold text-slate-700'>{order?.unitPrice}</span></td>
                                        <td>$<span className='font-semibold text-slate-900'>{order?.totalPrice}</span></td>
                                        <td className='text-center'>
                                            {
                                                order?.paymentStatus === 'paid' && <span className="font-semibold text-green-500">paid</span>
                                            }
                                            {
                                                order?.paymentStatus === 'unpaid' && <>
                                                    <span className="text-red-400 font-semibold block">unpaid</span>
                                                    <Link to={`/dashboard/payment/${'id'}`} className='btn btn-xs bg-green-600 border-none text-white mx-auto'>pay now</Link>
                                                    <br />
                                                    <button onClick={() => handleDeleteOrder(order?._id)} className='btn btn-xs bg-red-600 border-none text-white'>cancel</button>
                                                </>
                                            }
                                        </td>
                                        <td>
                                            {
                                                order?.orderStatus === 'pending' && <span className='bg-orange-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>pending</span>
                                            }
                                            {
                                                order?.orderStatus === 'inProgress' && <span className='bg-slate-600 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>in progress</span>
                                            }
                                            {
                                                order?.orderStatus === 'shipped' && <span className='bg-yellow-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>shipped</span>
                                            }
                                            {
                                                order?.orderStatus === 'complete' && <span className='bg-green-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>complete</span>
                                            }
                                        </td>
                                    </tr>
                                </>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrders;