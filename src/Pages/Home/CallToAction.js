import React from 'react';

const CallToAction = () => {
    return (
        <section className='my-12'>
            <div className="container mx-auto px-4">
                <div className="box shadow rounded-lg p-8 flex justify-between items-center flex-wrap gap-5">
                    <div className='w-full max-w-[100%] md:max-w-[47%]'>
                        <h2 className='text-2xl md:text-3xl font-bold text-teal-400'>Have any question about us or get a products request?</h2>
                        <h4 className='text-xl md:text-2xl text-slate-600'>Don't hesitate to contact us</h4>
                    </div>
                    <div className='w-full max-w-[100%] md:max-w-[47%] text-left md:text-right'>
                        <button className='btn bg-teal-600 border-teal-600 text-white mr-5'>Request For Quote</button>
                        <button className='btn bg-slate-900 border-slate-900 text-white'>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;