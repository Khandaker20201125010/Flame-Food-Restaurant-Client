import { Helmet } from "react-helmet";
import {useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFood = () => {
   const foods = useLoaderData();
    const { _id, shortDescription, country, price, quantity, foodCategory, foodName, Image} = foods
    console.log(foods)
    const handelUpdate = e =>{
        e.preventDefault()
        const form = e.target
        const shortDescription = form.shortDescription.value
        const country = form.country.value
        const price = form.price.value
        const quantity = form.quantity.value
        const foodCategory = form.foodCategory.value
        const foodName = form.foodName.value
        const Image = form.Image.value

        const updateFoods = {shortDescription, country, price, quantity, foodCategory, foodName, Image}  ;
      


        fetch(`http://localhost:5000/restaurant/place/${_id}`, {
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updateFoods)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Success!",
                    text: "Update Book successfully!",
                    icon: "success"
                  });
            }
            // Navigate('/allBooks')
        })



    }


    return (
        <div>
              <div className="lbg">
            <Helmet>
               ^^Updatefood^^
            </Helmet>
            <div className="p-5">
                <div className="md:w-2/3 w-4/5 mx-auto shadow-lg bg-orange-200 text-black mt-5 md:mt-10 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-center">Update Food</h3>
                    <form onSubmit={handelUpdate} >
                        <div className="grid md:grid-cols-2 gap-5 mt-5">
                            <div>
                                <p className="text-start">Food Name</p>
                                <input className="w-full border-2 px-4 py-2"  type="text" defaultValue={foodName} placeholder="Food Name"  name="foodName" id="" />
                            </div>

                            <div>
                                <p className="text-start">Food Category </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Food Category" defaultValue={foodCategory} name="foodCategory" id="" />
                            </div>

                            <div>
                                <p className="text-start"> Quantity </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Quantity" defaultValue={quantity} name="quantity" id="" />
                            </div>

                            <div>
                                <p className="text-start"> Price</p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder=" Price" defaultValue={price} name="price" id="" />
                            </div>

                            <div>
                                <p className="text-start">Food Origin (Country)</p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder="Food Origin" defaultValue={country} name="country" id="" />
                            </div>
                            <div>
                                <p className="text-start"> Short Description  </p>
                                <input className="w-full border-2 px-4 py-2" type="text" placeholder=" Short  description "  defaultValue={shortDescription} name="shortDescription" id="" />
                            </div>
                        </div>

                        <div>
                            <p className="text-start">Image </p>
                            <input className="w-full border-2 px-4 py-2" defaultValue={Image} type="text" placeholder="Image URL" name="Image" id="" />
                        </div>


                        <input className="w-full py-2 mb-6 font-bold hover:bg-orange-400 text-white bg-orange-500 mt-5" type="submit" value="Update Food " />

                    </form>
                </div>
            </div>

        </div>
            
        </div>
    );
};

export default UpdateFood;