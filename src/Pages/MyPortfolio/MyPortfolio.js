import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <section className='my-4'>
            <div className="container mx-auto px-5">
                <div className="max-w-3xl w-full p-6 mx-auto shadow-lg rounded">
                    <div className='mb-3'>
                        <h2 className="text-3xl text-center font-bold uppercase">Mehedi hasan Majed</h2>
                        <p className="text-md uppercase font-semibold text-center">Experienced Front-end web developer</p>
                        <hr className='mt-3' />
                    </div>
                    <div className='my-3'>
                        <a href='mailto:mdmajedhasan599@gmail.com' className='underline text-teal-600'>mdmajedhasan599@gmail.com</a>
                        <a href="tell:+8801734549831" className='block'>+(880) 1734549831</a>
                        <p>Lakshmipur, Dhaka, Bangladesh.</p>
                        <Link to='' className='underline text-teal-600 block'>https://www.linkedin.com/in/mehedi-hasan-majed-9250471b0/</Link>
                        <hr className='mt-3' />
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-2xl font-bold underline'>Education:</h3>
                        <p className='pl-6'>
                            <span className='font-bold block'>BBA in national university (Kafil Uddin University Collage)</span>
                            Department of Accounting
                            <br />
                            2021 - current</p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-2xl font-bold underline'>Skills:</h3>
                        <p className='pl-6'>
                            <span className="block font-bold">Front-end:</span>
                            <ul className='flex'>
                                <li>Html, </li>
                                <li>css, </li>
                                <li>js, </li>
                                <li>jQuery, </li>
                                <li>Bootstrap, </li>
                                <li>Tailwind, </li>
                                <li>React</li>
                            </ul>
                        </p>
                        <p className='pl-6'>
                            <span className="block font-bold">Back-end:</span>
                            <ul className='flex'>
                                <li>Node, </li>
                                <li>Express, </li>
                                <li>PHP, </li>
                            </ul>
                        </p>
                        <p className='pl-6'>
                            <span className="block font-bold">Database:</span>
                            <ul className='flex'>
                                <li>Mongodb, </li>
                                <li>MySQL, </li>
                            </ul>
                        </p>
                        <p className='pl-6'>
                            <span className="block font-bold">Tools:</span>
                            <ul className='flex'>
                                <li>Github, </li>
                                <li>Netlify, </li>
                                <li>Firebase, </li>
                                <li>Heroku </li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold underline'>Projects:</h3>
                        <p className='pl-6'>
                            <span className="block font-bold">01 Clean PC Warehouse:
                                <Link to='https://p-hero-assignment-11.web.app/' className='underline text-teal-400'> Live site</Link> |
                                <Link to='https://github.com/MajedHasan/clean-pc-warehouse' className='underline text-teal-400'> Github (client) </Link> |
                                <Link to='https://github.com/MajedHasan/clean-pc-warehouse-server' className='underline text-teal-400'> Github (server) </Link>
                            </span>
                            <span className='font-bold block'>key Feture:</span>
                            <ul >
                                <li>Login, Registration with Validation using firebase, </li>
                                <li>Manage your inventory, </li>
                                <li>JSON web token for validate users and other info, </li>
                            </ul>
                        </p>
                        <p className='pl-6'>
                            <span className="block font-bold">Technologies:</span>
                            <ul className='flex'>
                                <li>Html, </li>
                                <li>Css, </li>
                                <li>Js, </li>
                                <li>react, </li>
                                <li>react router, </li>
                                <li>react router dom, </li>
                                <li>react hook form, </li>
                                <li>axios, </li>
                                <li>node.js, </li>
                                <li>express.js, </li>
                                <li>mongodb, </li>
                            </ul>
                        </p>
                        <p className='pl-6 mt-4'>
                            <span className="block font-bold">02 Restaurant Website:
                                <Link to='https://mr-morsh-kitchen.de/' className='underline text-teal-400'> Live site</Link> |
                                <Link to='https://github.com/MajedHasan/kithen-king--rastaurant-webstie-full-file' className='underline text-teal-400'> Github Repository </Link>
                            </span>
                            <span className='font-bold block'>key Feture:</span>
                            <ul >
                                <li>Food ordering system with bunch of features</li>
                                <li>Custom Admin panel </li>
                                <li>Food offer page and track food or order (live)</li>
                            </ul>
                        </p>
                        <p className='pl-6'>
                            <span className="block font-bold">Technologies:</span>
                            <ul className='flex'>
                                <li>Html, </li>
                                <li>Css, </li>
                                <li>Js, </li>
                                <li>jQuery, </li>
                                <li>PHP, </li>
                                <li>MySQL, </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPortfolio;