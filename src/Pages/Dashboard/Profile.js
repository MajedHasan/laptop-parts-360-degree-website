import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Profile = () => {

    const [user, loading] = useAuthState(auth)
    const [education, setEducation] = useState('')
    const [location, setLocation] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [linkedinProfileLink, setLinkedinProfileLink] = useState('')


    useEffect(() => {
        const url = `https://agile-tor-39199.herokuapp.com/user/${user?.email}`
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.education && data?.location && data?.phone && data?.linkedin) {
                    setEducation(data?.education)
                    setLocation(data?.location)
                    setPhoneNumber(data?.phone)
                    setLinkedinProfileLink(data?.linkedin)
                }
            })
    }, [user])


    if (loading) {
        return <Loading></Loading>
    }


    const handleUpdateProfile = async (event) => {
        event.preventDefault()
        const profile = {
            education: education,
            location: location,
            phone: phoneNumber,
            linkedin: linkedinProfileLink
        }
        const url = `https://agile-tor-39199.herokuapp.com/user/${user?.email}`
        await fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.result?.modifiedCount === 1 || data?.result?.upsertedCount === 1) {
                    toast.success("Profile Updated Successfully")
                }
            })
    }

    const handleEducation = event => {
        const newEducation = event.target.value
        setEducation(newEducation)
    }

    const handleLocation = event => {
        const newLocation = event.target.value
        setLocation(newLocation)
    }

    const handlePhone = event => {
        const newPhone = event.target.value
        setPhoneNumber(newPhone)
    }

    const handleLinkedin = event => {
        const newLinkedin = event.target.value
        setLinkedinProfileLink(newLinkedin)
    }


    return (
        <section className="my-12">
            <div className="container mx-auto px-5">
                <h2 className='mb-8 text-center text-3xl text-teal-800'>My Profile</h2>
                <div className="shadow rounded p-5 max-w-md w-full mx-auto">
                    <form onSubmit={handleUpdateProfile}>
                        <input type="text" className="input input-bordered w-full mb-4" value={user?.displayName} disabled />
                        <input type="email" className="input input-bordered w-full mb-4" value={user?.email} disabled />
                        <input type="text" placeholder='Education' name='education' onChange={handleEducation} className="input input-bordered w-full mb-4" value={education || ''} />
                        <input type="text" placeholder='Location' name='location' onChange={handleLocation} className="input input-bordered w-full mb-4" value={location || ''} />
                        <input type="text" placeholder='phone Number' name='phone' onChange={handlePhone} className="input input-bordered w-full mb-4" value={phoneNumber || ''} />
                        <input type="text" placeholder='Linkedin Profile Link' name='linkedin' onChange={handleLinkedin} className="input input-bordered w-full mb-4" value={linkedinProfileLink || ''} />
                        <button type="submit" className='btn bg-green-400 border-green-500 text-white block mx-auto'>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Profile;