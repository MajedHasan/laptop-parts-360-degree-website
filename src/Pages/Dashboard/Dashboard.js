import React from 'react';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

const Dashboard = () => {

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
                <ul className="menu p-4 overflow-y-auto w-48 text-base-content">
                    <li><CustomLink to='/dashboard'>My Profile</CustomLink></li>
                    <li><CustomLink to='/dashboard/myorders'>My Orders</CustomLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;