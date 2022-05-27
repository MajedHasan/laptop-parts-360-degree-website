import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending, verificationError] = useSendPasswordResetEmail(auth)
    let signInError;
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"


    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error || verificationError) {
        signInError = <p className='text-red-500 text-center'> <small>{error?.message}{verificationError?.message}</small> </p>
    }

    if (user) {
        navigate(from, { replace: true })
    }


    const handleSignIn = async (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        await signInWithEmailAndPassword(email, password)
        event.target.reset()
    }

    const handleResetPassword = async () => {
        const email = document.getElementById("email").value
        if (email) {
            await sendPasswordResetEmail(email)
            toast.success("Please check your email, we sent a email for reset your password")
        }
        else {
            toast.error("Please provide your email")
        }
    }


    return (
        <section className='my-12'>
            <div className="container mx-auto px-4">
                <div className="shadow-lg rounded-lg p-5 w-full max-w-md mx-auto">
                    <h2 className='text-4xl font-semibold text-center mb-5'>Please L<span className="text-teal-600">o</span>gin</h2>
                    <form onSubmit={handleSignIn}>
                        {
                            signInError
                        }
                        <input type="text" placeholder="Email Address" id='email' name='email' className="input input-bordered w-full mb-3" />
                        <input type="password" placeholder="Password" name='password' className="input input-bordered w-full mb-3" />
                        <p onClick={handleResetPassword} className='text-orange-500 mb-1'>Forget your password? click here</p>
                        <Link to='/register' className='mb-4 block'>Need an account? <span className='underline'>Register here</span></Link>
                        <button type='submit' className='btn bg-slate-900 border-slate-900 mx-auto block'>Login</button>
                    </form>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Login;