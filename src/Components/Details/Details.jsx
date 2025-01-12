import { Helmet } from "react-helmet";
import { Link, Navigate, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Details = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { id } = useParams();
    const allFood = useLoaderData();
    const details = allFood?.find(item => item._id === id)
    const { _id, shortDescription, country, price, quantity, foodCategory, foodName,  Image, borrowedFoods } = details
    const currentDate = new Date(Date.now());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    


    const updatedFoods = { _id, time:{year:year,month:month,day:day}, foodName, quantity: parseInt(quantity) - 1, borrowedFoods: parseInt(borrowedFoods) + 1, shortDescription, price, foodCategory, buyerName: user?.displayName, Image, isSold: true, buyersEmail: user?.email };
    // const handleUpdate = (_id) => {

    //     if (quantity < 1) {
    //         return Swal.fire({
    //             title: "error!",
    //             text: "No More Available  Food!",
    //             icon: "error"
    //         });
    //     }
    //     if (borrowedFoods > 19) {
    //         return Swal.fire({
    //             title: "error!",
    //             text: "You can not buy Food more then 20 !",
    //             icon: "error"
    //         });
    //     }

    //     fetch(`https://resturant-management-server.vercel.app/restaurant/${_id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedFoods)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire({
    //                     title: "Success!",
    //                     text: "Purchases Food Successfully!",
    //                     icon: "success"
    //                 });
    //             }
    //             navigate('/FreedBack')

    //         })

    // }
    return (
        <div>
            <div className="my-12 md:flex shadow-lg  gap-10 md:p-10 p-5">
                <Helmet>
                    <title>Details</title>
                </Helmet>
                <div className="md:flex-1 flex justify-center">
                    <img className="w-[600px] h-80 max-sm:mb-5 rounded-2xl" src={Image} alt="" />
                </div>
            
                <div className='md:flex-1 md:space-y-3'>
                    <h2 className="font-bold">Food Name: {foodName}</h2>
                    <p className="font-bold text-xl">Made BY:{user?.displayName}</p>
                    <h2 className="font-bold">Category: {foodCategory}</h2>
                    <p>{shortDescription}</p>
                    <div className='flex justify-between'>
                        <h2 className="font-bold">Country: {country}</h2>
                        <h2 className="font-bold text-red-500">Quantity: <span className='mx-1'>{quantity}</span></h2>

                    </div>
                    <p className="font-bold">Price: {price} $</p>


                    <div className="flex justify-between">
                        <Link to={-1}><button className="  my-5 text-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-400 border hover:border-red-500 text-white font-bold">Back</button></Link>

                        <Link  to={`/purchase/uptodate/${_id}`} ><button className="  my-5 text-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-400 border hover:border-red-500 text-white font-bold">Purchase Now</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;