import { Helmet } from "react-helmet";
import { AuthContext } from "../Providers/Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";


const AddFood = () => {
    const { user } = useContext(AuthContext);
    const handelAddFood = event => {

        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const foodName = form.foodName.value;
        const foodCategory= form.foodCategory.value;
        const quantity = form.quantity.value;
        const price =form.price.value;
        const country = form.country.value;
        const shortDescription =form.shortDescription.value;
        const  borrowedFoods = 0

        const email = user?.email;
        const Image = form.photo.value;
        const addFood ={borrowedFoods,shortDescription,country,price,quantity,foodCategory,foodName,name,email,Image}
        console.log(addFood)
        form.reset()
       
        fetch('http://localhost:5000/restaurant',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFood)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        })
    }

    return (
        <div>
              <div className="lbg">
            <Helmet>
               ^^AddToursitSport^^
            </Helmet>
            <div className="p-5">
                <div className="md:w-2/3 w-4/5 mx-auto shadow-lg bg-orange-200 text-black mt-5 md:mt-10 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-center">Add Food</h3>
                    <form onSubmit={handelAddFood} >
                        <div className="grid md:grid-cols-2 gap-5 mt-5">


                            <div>
                                <p className="text-start">Food Name</p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Food Name" name="foodName" id="" />
                            </div>

                            <div>
                                <p className="text-start">Food Category </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Food Category" name="foodCategory" id="" />
                            </div>

                            <div>
                                <p className="text-start"> Quantity </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Quantity" name="quantity" id="" />
                            </div>

                            <div>
                                <p className="text-start"> Price</p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder=" Price" name="price" id="" />
                            </div>

                            <div>
                                <p className="text-start">Food Origin (Country)</p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Food Origin" name="country" id="" />
                            </div>
                            <div>
                                <p className="text-start"> Short Description  </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder=" Short description " name="shortDescription" id="" />
                            </div>
                            <div>
                                <p className="text-start">User Email </p>
                                <input className="w-full border-2 px-4 py-2" type="email" placeholder="Email" disabled="disabled" defaultValue={user?.email} name="email" id="" />
                            </div>
                            <div>
                                <p className="text-start">User Name </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="User Name" disabled="disabled" defaultValue={user?.displayName} name="name" id="" />
                            </div>

                        </div>

                        <div>
                            <p className="text-start">Image </p>
                            <input className="w-full border-2 px-4 py-2" type="text" placeholder="Image URL" name="photo" id="" />
                        </div>


                        <input className="w-full py-2 mb-6 font-bold hover:bg-orange-400 text-white bg-orange-500 mt-5" type="submit" value="Add Food " />

                    </form>
                </div>
            </div>

        </div>
            
        </div>
    );
};

export default AddFood;