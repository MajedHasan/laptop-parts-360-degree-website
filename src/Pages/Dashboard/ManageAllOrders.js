import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import CancelOrderModal from './CancelOrderModal';

const ManageAllOrders = () => {

    // const [user, loading] = useAuthState(auth)
    const [cancelOrderModal, setCancelOrderModal] = useState(null)
    const { data: allOrders, isLoading, refetch } = useQuery('manageAllOrders', () => fetch('https://agile-tor-39199.herokuapp.com/orders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json())
    )


    if (isLoading) {
        return <Loading></Loading>
    }


    const handleUpdateOrder = (id, status) => {
        const orderStatus = { orderStatus: status }
        fetch(`https://agile-tor-39199.herokuapp.com/orders/${id}`, {
            method: "PUT",
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
                            <th>Product Name</th>
                            <th>Name</th>
                            <th>Address</th>
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
                                allOrders.map((order, index) => <tr key={order?._id}>
                                    <th>{index + 1}</th>
                                    <td>{order?.partsName}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.address}</td>
                                    <td>{order?.quantity}</td>
                                    <td>$<span className='font-semibold text-slate-700'>{order?.price}</span></td>
                                    <td>$<span className='font-semibold text-slate-900'>{order?.totalPrice}</span></td>
                                    <td>
                                        {
                                            order?.paymentStatus === 'paid' && <>
                                                <span className="font-semibold text-green-500">paid</span>
                                                <br />
                                                <span className='text-orange-400'>
                                                    Transaction id:
                                                    <br />
                                                    {order?.transactionId}
                                                </span>
                                            </>
                                        }
                                        {
                                            order?.paymentStatus === 'unpaid' && <span className="text-red-400 font-semibold block">unpaid</span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            order?.orderStatus === 'inProgress' && <span className='bg-slate-600 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>in progress</span>
                                        }
                                        {
                                            order?.orderStatus === 'pending' && <span className='bg-orange-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>pending</span>
                                        }
                                        {
                                            order?.orderStatus === 'ship' && <span className='bg-yellow-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>shipped</span>
                                        }
                                        {
                                            order?.orderStatus === 'complete' && <span className='bg-green-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>complete</span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            order?.orderStatus === 'inProgress' && <label htmlFor="cancelOrderModal"
                                                onClick={() => setCancelOrderModal(order)}
                                                className="btn btn-xs bg-red-500 border-none text-white"
                                            >cancel</label>
                                        }
                                        {
                                            order?.orderStatus === 'pending' && <button onClick={() => handleUpdateOrder(order?._id, 'ship')} className="btn btn-xs bg-yellow-500 border-yellow-500 text-white">Ship</button>
                                        }
                                        {
                                            order?.orderStatus === 'ship' && <button onClick={() => handleUpdateOrder(order?._id, 'complete')} className="btn btn-xs bg-green-500 border-green-500 text-white">Complete</button>
                                        }
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>

                {
                    cancelOrderModal && <CancelOrderModal
                        cancelOrderModal={cancelOrderModal}
                        setCancelOrderModal={setCancelOrderModal}
                        refetch={refetch}
                    ></CancelOrderModal>
                }

            </div>
        </section>
    );
};

export default ManageAllOrders;