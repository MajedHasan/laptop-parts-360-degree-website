import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';
import Loading from '../Shared/Loading';

const Dashboard = () => {

    const [user, loading] = useAuthState(auth)
    const [isUser, isUserLoading] = useUser(user)
    const [isAdmin, isAdminLoading] = useAdmin(user)


    if (loading || isUserLoading || isAdminLoading) {
        return <Loading></Loading>
    }


    const CustomLink = ({ children, to, ...props }) => {
        const resolved = useResolvedPath(to)
        const match = useMatch({ path: resolved.pathname, end: true })

        return <Link to={to}
            {...props}
            className={match && 'text-white bg-teal-600'}
        >
            {children}
        </Link>
    }


    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="mx-auto p-5">
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side bg-base-50 shadow-lg">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 text-base-content">
                    <li><CustomLink to='/dashboard'>My Profile</CustomLink></li>

                    {
                        isUser && <>
                            <li><CustomLink to='/dashboard/myorders'>My Orders</CustomLink></li>
                            <li><CustomLink to='/dashboard/addreview'>Add A Review</CustomLink></li>
                        </>
                    }

                    {
                        isAdmin && <>
                            <li><CustomLink to='/dashboard/manageAllOrder'>Manage All Orders</CustomLink></li>
                            <li><CustomLink to='/dashboard/addAProduct'>Add A Product</CustomLink></li>
                            <li><CustomLink to='/dashboard/users'>Users</CustomLink></li>
                            <li><CustomLink to='/dashboard/manageProducts'>Manage Products</CustomLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;