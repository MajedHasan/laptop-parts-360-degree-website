import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {

    const location = useLocation()
    const [user, loading] = useState(false)

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAuth;