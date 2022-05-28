import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
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
                        <tr>
                            <th>1</th>
                            <td>Apple Macbook Pro 2017 Battery</td>
                            <td>15</td>
                            <td>$<span className='font-semibold text-slate-700'>5.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>75.00</span></td>
                            <td className='text-center'>
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-orange-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>pending</span>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Laptop Bag</td>
                            <td>50</td>
                            <td>$<span className='font-semibold text-slate-700'>10.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>500.00</span></td>
                            <td className='text-center'>
                                <span className="text-red-400 font-semibold block">unpaid</span>
                                <Link to={`/dashboard/payment/${'id'}`} className='btn btn-xs bg-green-600 border-none text-white mx-auto'>pay now</Link>
                                <br />
                                <button className='btn btn-xs bg-red-600 border-none text-white'>cancel</button>
                            </td>
                            <td>
                                <span className='bg-slate-600 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>in progress</span>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Apple Macbook Pro 2017 Charger</td>
                            <td>5</td>
                            <td>$<span className='font-semibold text-slate-700'>20.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>100.00</span></td>
                            <td className='text-center'>
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-yellow-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>shipped</span>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>laptop Mouse</td>
                            <td>12</td>
                            <td>$<span className='font-semibold text-slate-700'>10.00</span></td>
                            <td>$<span className='font-semibold text-slate-900'>120.00</span></td>
                            <td className='text-center'>
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-green-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>complete</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrders;