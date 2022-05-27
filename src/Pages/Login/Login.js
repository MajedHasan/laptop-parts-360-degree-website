import React from 'react';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <section className='my-12'>
            <div className="container mx-auto px-4">
                <div className="shadow-lg rounded-lg p-5 w-full max-w-md mx-auto">
                    <h2 className='text-4xl font-semibold text-center mb-5'>Please L<span className="text-teal-600">o</span>gin</h2>
                    <form >
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full mb-3" />
                        <input type="password" placeholder="Password" className="input input-bordered w-full mb-3" />
                        <button className='btn bg-slate-900 border-slate-900 mx-auto block'>Login</button>
                    </form>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Login;