import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const SingleOrder = ({food}) => {
    const {user} =useContext(AuthContext)
    const navigate = useNavigate()
    const {_id,shortDescription,country,price,quantity,foodCategory,foodName,name,email,Image,borrowedFoods } = food;

    const updatedFoods = { _id, foodName,quantity:parseInt(quantity)+1,borrowedFoods:parseInt(borrowedFoods)-1, shortDescription, price, foodCategory,buyerName:user?.displayName, Image, isSold: true ,buyersEmail:user?.email};
    const handleUpdate = (_id) => {

        if(borrowedFoods < 1 ){
           return  Swal.fire({
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
                navigate ('/OrderedFood') 
            })

    }
    return (
        <div>
            <div>
            
            <div className='shadow-lg p-5 rounded-md flex flex-col border'>

                <p>{borrowedFoods}</p>
              <div className='flex justify-center mb-4'>
                  <img className=' h-80 w-80 rounded-full' src={Image} alt="" />
              </div>
              <div className='flex-grow'>
              <h2 className="font-bold">Food Name: {foodName}</h2>
              <h2 className="font-bold">Food Category: {foodCategory}</h2>
              <div className='flex justify-between'>
                  <h2 className="font-bold">Price: {price} $</h2>
                  <h2 className="font-bold">Quantity: {quantity}</h2>
                  
              </div>
              </div>
              <button onClick={()=>handleUpdate(_id)} className=" w-full my-5 text-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-400 border hover:border-red-500 text-white font-bold">Delete </button>
          </div>
             
          </div>
            
        </div>
    );
};

export default SingleOrder;