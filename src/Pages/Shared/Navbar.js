import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")
    }
    const CustomLink = ({ to, children, ...props }) => {

        let resolved = useResolvedPath(to)
        let match = useMatch({ path: resolved.pathname, end: true })

        return <Link to={to}
            className={match && 'text-white bg-green-400'}
            {...props}
        >
            {
                children
            }
        </Link>
    }

    const link = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
        <li><CustomLink to='/portfolio'>Portfolio</CustomLink></li>
        {
            user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        }
    </>

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            link
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className='text-lg font-bold'>{user?.displayName}</span>
                        <button onClick={handleSignOut} className='btn btn-xs btn-danger ml-3'>Sign Out</button>
                    </>
                        : <>
                            <CustomLink to='/login' style={{ padding: '3px 5px', borderRadius: '4px', marginRight: '6px' }}>Login</CustomLink>
                            <CustomLink to='/register' style={{ padding: '3px 5px', borderRadius: '4px' }}>Register</CustomLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;