import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    })
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const [token] = useToken(user)
    let signUpError;
    const navigate = useNavigate()


    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error || updateError) {
        signUpError = <p className='text-red-500 text-center'> <small>{error?.message}{updateError?.message}</small> </p>
    }
    if (token) {
        navigate("/")
    }


    const handleSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        if (name && email && password) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
        }
        else {
            toast.error("Please fillup all field to sign up")
        }
    }


    return (
        <section className='my-12'>
            <div className="container mx-auto px-4">
                <div className="shadow-lg rounded-lg p-5 w-full max-w-md mx-auto">
                    <h2 className='text-4xl font-semibold text-center mb-5'>Please Sign<span className="text-teal-600">Up</span></h2>
                    <form onSubmit={handleSignUp}>
                        {
                            signUpError
                        }
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full mb-3" />
                        <input type="email" placeholder="Email Address" id='email' name='email' className="input input-bordered w-full mb-3" />
                        <input type="password" placeholder="Password" name='password' className="input input-bordered w-full mb-3" />
                        <Link to='/login' className='mb-4 block'>Already have an account? <span className='underline'>Login here</span></Link>
                        <button type='submit' className='btn bg-slate-900 border-slate-900 mx-auto block'>SignUp</button>
                    </form>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Register;