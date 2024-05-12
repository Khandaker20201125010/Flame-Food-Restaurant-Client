import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();
    const allFood = useLoaderData();
    const details = allFood?.find(item => item._id === id)
    console.log(allFood)
    const {_id,shortDescription,country,price,quantity,foodCategory,foodName,name,email,Image} = details
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
            <h2 className="font-bold">Category: {foodCategory}</h2>
            <p>{shortDescription}</p>
            <div className='flex justify-between'>
                <h2 className="font-bold">Country: {country}</h2>
                <h2 className="font-bold text-red-500">Quantity: <span className='mx-1'>{quantity}</span></h2> 
            </div>
            <p className="font-bold">Price: {price} $</p>

            <div className="flex justify-between">
                <Link to={-1}><button className="  my-5 text-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-400 border hover:border-red-500 text-white font-bold">Back</button></Link>

                <Link ><button className="  my-5 text-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-400 border hover:border-red-500 text-white font-bold">Buy Now</button></Link>

            </div>
            </div>
        </div>
            
        </div>
    );
};

export default Details;