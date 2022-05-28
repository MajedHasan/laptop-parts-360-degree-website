import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {

    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    const [token] = useToken(user)

    if (loading) {
        return <Loading></Loading>
    }

    if (!token) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAuth;