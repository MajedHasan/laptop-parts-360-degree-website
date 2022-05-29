import React from 'react';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const Users = () => {

    const [user, loading] = useAuthState(auth)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://agile-tor-39199.herokuapp.com/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json())
    )


    if (loading || isLoading) {
        return <Loading></Loading>
    }


    const handleMakeAdmin = async (email) => {
        fetch(`https://agile-tor-39199.herokuapp.com/user/admin/${user?.email}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedCount || data.modifiedCount) {
                    toast.success("This user is an admin Now")
                    refetch()
                }
            })
    }


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
                        {
                            users?.length < 1 ? <>
                                <tr>
                                    <td colSpan='8' className='text-2xl text-center font-bold text-red-500'>There have no User</td>
                                </tr>
                            </>
                                :
                                users?.map((user, index) =>
                                    <tr key={user?._id}>
                                        <th>{index + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>
                                            {
                                                user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user?.email)} className="btn btn-xs bg-slate-900 border-slate-900 text-white">Make Admin</button>
                                            }
                                        </td>
                                        <td>
                                            <button className="btn btn-xs bg-red-500 border-red-500 text-white">Remove</button>
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Users;