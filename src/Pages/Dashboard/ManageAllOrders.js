import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const ManageAllOrders = () => {

    // const [user, loading] = useAuthState(auth)
    const { data: allOrders, isLoading, refetch } = useQuery('manageAllOrders', () => fetch('http://localhost:5000/orders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json())
    )


    if (isLoading) {
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

    const handleUpdateOrder = (id, status) => {
        const orderStatus = { orderStatus: status }
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(orderStatus)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success(`Order is: ${status} now`)
            })
    }


    return (
        <section className="my-orders">
            <h2 className="text-3xl text-center font-semibold mb-6">All Orders</h2>
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
                            <th>Order Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.length < 1 ? <>
                                <tr>
                                    <td colSpan='8' className='text-2xl text-center font-bold text-red-500'>There have no order</td>
                                </tr>
                            </>
                                :
                                allOrders.map((order, index) => <>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{order?.partsName}</td>
                                        <td>{order?.quantity}</td>
                                        <td>$<span className='font-semibold text-slate-700'>{order?.unitPrice}</span></td>
                                        <td>$<span className='font-semibold text-slate-900'>{order?.price}</span></td>
                                        <td>
                                            {
                                                order?.paymentStatus === 'paid' && <span className="font-semibold text-green-500">paid</span>
                                            }
                                            {
                                                order?.paymentStatus === 'unpaid' && <span className="text-red-400 font-semibold block">unpaid</span>
                                            }
                                        </td>
                                        <td>
                                            {
                                                order?.paymentStatus === 'inProgress' && <span className='bg-slate-600 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>in progress</span>
                                            }
                                            {
                                                order?.paymentStatus === 'pending' && <span className='bg-orange-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>pending</span>
                                            }
                                            {
                                                order?.paymentStatus === 'ship' && <span className='bg-yellow-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>shipped</span>
                                            }
                                            {
                                                order?.paymentStatus === 'complete' && <span className='bg-green-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>complete</span>
                                            }
                                        </td>
                                        <td>
                                            {
                                                order?.paymentStatus === 'inProgress' && <button onClick={() => handleDeleteOrder(order?._id)} className="btn btn-xs bg-red-500 border-red-500 text-white">Cancel</button>
                                            }
                                            {
                                                order?.paymentStatus === 'pending' && <button onClick={() => handleUpdateOrder(order?._id, 'ship')} className="btn btn-xs bg-yellow-500 border-yellow-500 text-white">Ship</button>
                                            }
                                            {
                                                order?.paymentStatus === 'ship' && <button onClick={() => handleUpdateOrder(order?._id, 'complete')} className="btn btn-xs bg-green-500 border-green-500 text-white">Complete</button>
                                            }
                                        </td>
                                    </tr>
                                </>)
                        }
                        <tr>
                            <th>1</th>
                            <td>Apple Macbook Pro 2017 Battery</td>
                            <td>15</td>
                            <td>$<span className='font-semibold text-slate-700'>5.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>75.00</span></td>
                            <td>
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-orange-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>pending</span>
                            </td>
                            <td>
                                <button className="btn btn-xs bg-yellow-500 border-yellow-500 text-white">Ship</button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Laptop Bag</td>
                            <td>50</td>
                            <td>$<span className='font-semibold text-slate-700'>10.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>500.00</span></td>
                            <td>
                                <span className="text-red-400 font-semibold block">unpaid</span>
                            </td>
                            <td>
                                <span className='bg-slate-600 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>in progress</span>
                            </td>
                            <td>
                                <button className="btn btn-xs bg-red-500 border-red-500 text-white">Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Apple Macbook Pro 2017 Charger</td>
                            <td>5</td>
                            <td>$<span className='font-semibold text-slate-700'>20.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>100.00</span></td>
                            <td>
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-yellow-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>shipped</span>
                            </td>
                            <td>
                                <button className="btn btn-xs bg-green-500 border-green-500 text-white">Complete</button>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>laptop Mouse</td>
                            <td>12</td>
                            <td>$<span className='font-semibold text-slate-700'>10.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>120.00</span></td>
                            <td >
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-green-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>complete</span>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageAllOrders;