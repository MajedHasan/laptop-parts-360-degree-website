import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth)
    const [token] = useToken(gUser || gitUser)
    let signInError;
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"


    if (gLoading || gitLoading) {
        return <Loading></Loading>
    }

    if (gError || gitError) {
        signInError = <p className='text-red-500 text-center'> <small>{gError?.message}{gitError?.message}</small> </p>
    }

    if (token) {
        navigate(from, { replace: true })
    }


    return (
        <section className='w-full max-w-md mx-auto mt-6'>
            <div className="divider">OR</div>
            {
                signInError
            }
            <div className='mt-5'>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline mb-4 block mx-auto'>
                    Continue With Google
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-outline block mx-auto'>
                    Continue With Github
                </button>
            </div>
        </section>
    );
};

export default SocialLogin;