import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ cancelOrderModal, setCancelOrderModal, refetch }) => {

    const { _id } = cancelOrderModal

    const handleDeleteOrder = id => {
        fetch(`https://agile-tor-39199.herokuapp.com/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("This Order has been deleted")
                console.log(data);
                setCancelOrderModal(null)
                refetch()
            })
    }

    return (
        <>
            <input type="checkbox" id="cancelOrderModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-center text-red-500">Are You sure You want ot cancel This Order</h3>
                    <div className="modal-action flex justify-between">
                        <button className='btn bg-red-500 border-red-500 text-white' onClick={() => handleDeleteOrder(_id)}>Delete</button>
                        <label htmlFor="cancelOrderModal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CancelOrderModal;