import React from 'react';

const ManageAllOrders = () => {
    return (
        <section className="my-orders">
            <h2 className="text-3xl text-center font-semibold mb-6">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td className='text-center'>
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-orange-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>pending</span>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td className='text-center'>
                                <span className="text-red-400 font-semibold block">unpaid</span>
                                <button className='btn btn-xs bg-green-600 border-none text-white block mx-auto'>pay now</button>
                                <button className='btn btn-xs bg-red-600 border-none text-white'>cancel</button>
                            </td>
                            <td>
                                <span className='bg-slate-600 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>in progress</span>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td className='text-center'>
                                <span className="font-semibold text-green-500">paid</span>
                            </td>
                            <td>
                                <span className='bg-yellow-400 rounded-lg py-[4px] px-3 text-white uppercase text-xs font-semibold inline-block'>shipped</span>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
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

export default ManageAllOrders;