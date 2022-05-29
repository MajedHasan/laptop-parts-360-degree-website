import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequireAdmin = ({ children }) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    const [isAdmin, isAdminLoading] = useAdmin(user)


    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (!isAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }


    return children;
};

export default RequireAdmin;