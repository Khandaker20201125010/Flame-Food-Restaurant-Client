import { Link } from "react-router-dom";

const SingleFood = ({food}) => {
   const {_id,shortDescription,country,price,quantity,foodCategory,foodName,name,email,Image,borrowedFoods} = food 
    
    return (
        <div>
            
          <div className='shadow-lg p-5 rounded-md flex flex-col border'>
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
            <Link to={`/details/${_id}`} ><button className=" w-full my-5 text-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-400 border hover:border-red-500 text-white font-bold">Details </button></Link>
        </div>
           
        </div>
    );
};

export default SingleFood;