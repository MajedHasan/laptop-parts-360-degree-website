import React from 'react';
import bgImg from '../../images/home-banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-[85vh]" style={{ background: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Parts 360 degree</h1>
                    <p className="mb-5">We have best quality laptop parts, we are offering the quality parts. We have over million of customer. They are happy to use our products</p>
                    <a href='#parts' className="btn btn-primary bg-green-500 border-green-300 text-white">Our Parts</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;