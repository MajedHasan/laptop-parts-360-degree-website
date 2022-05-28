import React from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
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
                        <tr>
                            <th>1</th>
                            <td>
                                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="" className='w-full max-w-[40px]' />
                            </td>
                            <td>Apple Macbook Pro 2017 Battery</td>
                            <td>15</td>
                            <td>$<span className='font-semibold text-slate-700'>5.00</span></td>
                            <td>
                                <Link to={`/dashboard/manageProducts/${'_id'}`} className="btn btn-xs bg-slate-800 border-slate-800 text-white">Manage</Link>
                            </td>
                            <td>
                                <button className='btn btn-xs bg-red-500 border-red-500 text-white'> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="" className='w-full max-w-[40px]' /></td>
                            <td>Laptop Bag</td>
                            <td>50</td>
                            <td>$<span className='font-semibold text-slate-700'>10.00</span></td>
                            <td>
                                <Link to={`/dashboard/manageProducts/${'_id'}`} className="btn btn-xs bg-slate-800 border-slate-800 text-white">Manage</Link>
                            </td>
                            <td>
                                <button className='btn btn-xs bg-red-500 border-red-500 text-white'> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="" className='w-full max-w-[40px]' /></td>
                            <td>Apple Macbook Pro 2017 Charger</td>
                            <td>5</td>
                            <td>$<span className='font-semibold text-slate-700'>20.00</span></td>
                            <td>
                                <Link to={`/dashboard/manageProducts/${'_id'}`} className="btn btn-xs bg-slate-800 border-slate-800 text-white">Manage</Link>
                            </td>
                            <td>
                                <button className='btn btn-xs bg-red-500 border-red-500 text-white'> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="" className='w-full max-w-[40px]' /></td>
                            <td>laptop Mouse</td>
                            <td>12</td>
                            <td>$<span className='font-semibold text-slate-700'>10.00</span></td>
                            <td>
                                <Link to={`/dashboard/manageProducts/${'_id'}`} className="btn btn-xs bg-slate-800 border-slate-800 text-white">Manage</Link>
                            </td>
                            <td>
                                <button className='btn btn-xs bg-red-500 border-red-500 text-white'> Delete </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default ManageProducts;