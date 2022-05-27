import React from 'react';

const Users = () => {
    return (
        <section className="my-orders">
            <h2 className="text-3xl text-center font-semibold mb-6">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>
                                <button className="btn btn-xs bg-slate-900 border-slate-900 text-white">Make Admin</button>
                            </td>
                            <td>
                                <button className="btn btn-xs bg-red-500 border-red-500 text-white">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>
                                <button className="btn btn-xs bg-slate-900 border-slate-900 text-white">Make Admin</button>
                            </td>
                            <td>
                                <button className="btn btn-xs bg-red-500 border-red-500 text-white">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>
                                <button className="btn btn-xs bg-slate-900 border-slate-900 text-white">Make Admin</button>
                            </td>
                            <td>
                                <button className="btn btn-xs bg-red-500 border-red-500 text-white">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>
                                <button className="btn btn-xs bg-slate-900 border-slate-900 text-white">Make Admin</button>
                            </td>
                            <td>
                                <button className="btn btn-xs bg-red-500 border-red-500 text-white">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Users;