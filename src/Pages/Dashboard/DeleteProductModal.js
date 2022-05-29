import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ deleteProduct, setDeleteProduct, refetch }) => {

    const { _id } = deleteProduct

    const handleDeleteParts = async (id) => {
        fetch(`https://agile-tor-39199.herokuapp.com/parts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDeleteProduct(null)
                refetch()
                toast.success("This product has been deleted")
            })
    }


    return (
        <>
            <input type="checkbox" id="deleteProductModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-center text-red-500">Are You sure You want ot cancel This Order</h3>
                    <div className="modal-action flex justify-between">
                        <button className='btn bg-red-500 border-red-500 text-white' onClick={() => handleDeleteParts(_id)}>Delete</button>
                        <label htmlFor="deleteProductModal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteProductModal;