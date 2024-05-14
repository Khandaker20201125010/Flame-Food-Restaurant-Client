import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const FeedBack = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { _id, shortDescription,preview, country, price, quantity, foodCategory, foodName, name, email, Image, borrowedFoods, time } = FeedBack;
    const currentDate = new Date(Date.now());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const updatedFoods = { _id,preview, time: { year: year, month: month, day: day }, foodName, quantity: parseInt(quantity) + 1, borrowedFoods: parseInt(borrowedFoods) - 1, shortDescription, price, foodCategory, buyerName: user?.displayName, Image, isSold: true, buyersEmail: user?.email };
    const handleUpdate = (_id) => {

        if (borrowedFoods < 1) {
            return Swal.fire({
                title: "error!",
                text: "Sorry No Food Available !",
                icon: "error"
            });
        }

        fetch(`http://localhost:5000/restaurant/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFoods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Return Order successfully!",
                        icon: "success"
                    });
                }
                navigate('/OrderedFood')
            })

    }
    return (
        <div className="max-w-lg mx-auto mt-10">
        <div className="bg-orange-200 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="review">Your Review</label>
                <textarea id="review" name="review" rows="4" placeholder="Write your review here..." className="resize-none border  w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="flex items-center justify-end">
                <button onClick={() => handleUpdate(_id)} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                </button>
            </div>
        </div>
    </div>
    
    
    );
};

export default FeedBack;