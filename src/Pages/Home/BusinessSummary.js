import React from 'react';

const BusinessSummary = () => {
    return (
        <section className='my-12'>
            <div className="container mx-auto p-4">
                <div className="top-text mb-6 text-center">
                    <h2 className='text-4xl text-teal-600 font-bold uppercase'>Thousands Of Business Trust Us</h2>
                    <h3 className='text-2xl text-slate-600 uppercase'>Your Expectation and Our Goal</h3>
                    <div>
                        <span className='h-[2px] bg-teal-500 max-w-[40px] w-full inline-block'></span>
                        <span className='mx-4 h-[2px] bg-slate-400 max-w-[20px] w-full inline-block'></span>
                        <span className='h-[2px] bg-teal-500 max-w-[35px] w-full inline-block'></span>
                    </div>
                </div>
                <div className="bottom-content flex flex-wrap justify-between gap-5">
                    <div className='w-full max-w-[100%] md:max-w-[47%] lg:max-w-[22%] text-center'>
                        <h2 className='text-4xl font-bold text-slate-800'>05</h2>
                        <p className='text-teal-400 text-xl'>Countries</p>
                    </div>
                    <div className='w-full max-w-[100%] md:max-w-[47%] lg:max-w-[22%] text-center'>
                        <h2 className='text-4xl font-bold text-slate-800'>1000+</h2>
                        <p className='text-teal-400 text-xl'>Happy Clients</p>
                    </div>
                    <div className='w-full max-w-[100%] md:max-w-[47%] lg:max-w-[22%] text-center'>
                        <h2 className='text-4xl font-bold text-slate-800'>99%</h2>
                        <p className='text-teal-400 text-xl'>Success Rate</p>
                    </div>
                    <div className='w-full max-w-[100%] md:max-w-[47%] lg:max-w-[22%] text-center'>
                        <h2 className='text-4xl font-bold text-slate-800'>5000k+</h2>
                        <p className='text-teal-400 text-xl'>Complete Orders</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;