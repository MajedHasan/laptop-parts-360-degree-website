import React from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {
    return (
        <section className='my-12' id='parts'>
            <div className="container mx-auto px-4">
                <h2 className='text-4xl text-center font-semibold mb-8'>Our T<span className='text-green-400'>oo</span>ls</h2>
                <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ToolsCard></ToolsCard>
                </div>
            </div>
        </section>
    );
};

export default Tools;