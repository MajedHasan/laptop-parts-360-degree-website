import React from 'react';
import homeAbout from '../../images/home-page-about.jpg';

const AboutUs = () => {
    return (
        <section className="my-16">
            <div className="container mx-auto px-5">
                <h2 className='text-center font-semibold text-4xl mb-8'>About Us</h2>
                <div className="flex flex-wrap justify-between items-center gap-6">
                    <div className='w-full md:w-5/12'>
                        <span className='block text-teal-400 font-bold text-md'>About Us</span>
                        <h2 className='text-2xl text-slate-600 mb-2'>We are the best laptop parts suppliers</h2>
                        <h2 className="text-3xl text-slate-900 font-semibold mb-4">You can get your desier parts from us</h2>
                        <p>
                            We are always trying to serve best and quality parts to our customers. We are collecting all parts from various company (amazon, samsung, acer, dell) etc.
                        </p>
                    </div>
                    <div className='w-full md:w-5/12'>
                        <img src={homeAbout} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;