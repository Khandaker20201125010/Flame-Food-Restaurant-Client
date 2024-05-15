import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Purchase = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const singlepurhe = useLoaderData()
    const { _id, shortDescription, country, price, quantity, foodCategory, foodName,  Image, borrowedFoods,email,name } = singlepurhe
    const currentDate = new Date(Date.now());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();


    const handleUpdate = (_id) => {
    
     
        // e.preventDefault()
        
        const foodName = document.getElementById('foodName').value;
        const price = document.getElementById('price').value;
        
        const count = document.getElementById('quantity').value;
      

       
       
      


        const updated = { _id, time:{year:year,month:month,day:day}, foodName, quantity: parseInt(quantity)-parseInt(count) , borrowedFoods: parseInt(borrowedFoods) + parseInt(count) , shortDescription, price, foodCategory, buyerName: user?.displayName, Image, isSold: true, buyersEmail: user?.email };
        if (quantity < 1) {
                    return Swal.fire({
                        title: "error!",
                        text: "No More Available  Food!",
                        icon: "error"
                    });
                }
                if (borrowedFoods > 19) {
                    return Swal.fire({
                        title: "error!",
                        text: "You can not buy Food more then 20 !",
                        icon: "error"
                    });
                }
        
                fetch(`http://localhost:5000/restaurant/uptodate/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updated)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "Purchases Food Successfully!",
                                icon: "success"
                            });
                        }
                        navigate('/OrderedFood')
        
                    })
                  
        

    }

    return (
        <div>
            <div className="max-w-lg mx-auto mt-10">
                <div className="bg-orange-200 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl mb-4 font-bold">Purchase Food</h2>
                    <div className="mb-4">

                        <label className="block text-gray-700 text-sm font-bold mb-2" >Your Purchase</label>
                        <input type="text" name="buyersName" disabled='disabled' defaultValue={user?.displayName} placeholder='Your Name' className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-black leading-tight focus:outline-none  focus:shadow-outline" />

                        <input type="text" disabled='disabled' name="buyersEmail" defaultValue={user?.email} placeholder='Your email' className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-black leading-tight focus:outline-none  focus:shadow-outline" />

                        <input type="text" name="foodName" id="foodName" rows="4" disabled defaultValue={foodName}  placeholder=" Food Name " className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                        <input type="text" name="price" id="price" rows="4" defaultValue={price} disabled className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


                        <input type="text" name="quantity" id="quantity" rows="4" placeholder="Quantity" className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                        <input type="text" name="buyingDate" id="buyingDate" disabled rows="4" placeholder={`${day}/${month}/${year}`} className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex items-center justify-end">
                        <button onClick={()=>handleUpdate(_id)} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        purchase
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Purchase;