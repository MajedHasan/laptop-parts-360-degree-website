import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddAReview = () => {

    const [user, loading] = useAuthState(auth)


    if (loading) {
        return <Loading></Loading>
    }


    const handleAddReview = async (event) => {
        event.preventDefault()
        const rating = event.target.rating.value
        const reviewText = event.target.review.value
        const myReview = {
            name: user?.displayName,
            email: user?.email,
            rating: rating,
            reviewText: reviewText,
        }

        await fetch('https://agile-tor-39199.herokuapp.com/review', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    event.target.reset()
                    toast.success("Your Review has been added successfully")
                }
            })
    }


    return (
        <section className="my-12">
            <div className="container mx-auto px-4">
                <div className="box shadow-lg rounded-lg p-6 w-full max-w-sm mx-auto">
                    <h2 className="text-center mb-6 font-semibold text-teal-700 text-3xl">Add A Review</h2>
                    <form onSubmit={handleAddReview}>
                        <div className="rating gap-1 mb-3">
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value='1' />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" defaultChecked value='2' />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value='3' />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value='4' />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value='5' />
                        </div>
                        <textarea name='review' className="textarea textarea-bordered w-full mb-5" placeholder="Review"></textarea>
                        <button className='btn btn-green-500 border-green-500 text-white block mx-auto'>Add Review</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAReview;