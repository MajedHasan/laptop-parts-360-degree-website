import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';

const RequireUser = ({ children }) => {

    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    const [isUser, isUserLoading] = useUser(user)


    if (loading || isUserLoading) {
        return <Loading></Loading>
    }

    if (!isUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }


    return children;
};

export default RequireUser;