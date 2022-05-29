import React from 'react';

const Contact = () => {
    return (
        <section className="my-12">
            <div className="container mx-auto px-5">
                <h2 className="text-center text-teal-500 font-semibold text-4xl mb-8">Contact Us</h2>
                <div className="shadow rounded mx-auto w-full max-w-md p-5">
                    <form >
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" class="input input-bordered w-full mb-3" />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" class="input input-bordered w-full mb-3" />

                        <label htmlFor="">Subject</label>
                        <input type="text" placeholder="Email" class="input input-bordered w-full mb-3" />

                        <label htmlFor="">Message</label>
                        <textarea class="textarea textarea-bordered w-full mb-3" placeholder="Message"></textarea>

                        <button className="btn bg-teal-500 border-teal-500 text-white w-full">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;