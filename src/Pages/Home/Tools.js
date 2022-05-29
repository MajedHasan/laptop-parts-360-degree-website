import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {

    const [tools, setTools] = useState([])


    useEffect(() => {
        fetch('https://agile-tor-39199.herokuapp.com/parts', {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setTools(data)
            })
    }, [])


    return (
        <section className='my-12' id='parts'>
            <div className="container mx-auto px-4">
                <h2 className='text-5xl text-center font-semibold mb-8'>Our T<span className='text-green-400'>oo</span>ls</h2>
                <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        tools?.slice(0, 6)?.map(tool => <ToolsCard
                            key={tool?._id}
                            tool={tool}
                        ></ToolsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tools;