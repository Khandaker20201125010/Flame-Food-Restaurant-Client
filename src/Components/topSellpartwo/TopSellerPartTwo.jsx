import { Link } from "react-router-dom";


const TopSellerPartTwo = ({food}) => {
    const { _id, shortDescription, country, price, quantity, foodCategory, foodName, name, email, Image, borrowedFoods } = food;

    return (
        <div className="">
            
            <div className='shadow-lg p-5 rounded-md flex flex-col border'>
                <div className='flex justify-center mb-4'>
                    <img className='h-80 w-80 rounded-full' src={Image} alt="" />
                </div>
                <div className='flex-grow'>
                    <h2 className="font-bold">Food Name: {foodName}</h2>
                    <h2 className="font-bold">Food Category: {foodCategory}</h2>
                    <p>{borrowedFoods}</p>
                    <div className='flex justify-between'>
                        <h2 className="font-bold">Price: {price} $</h2>
                        <h2 className="font-bold">Quantity: {quantity}</h2>
                    </div>
                </div>
                <Link to={`/details/${_id}`}  ><button className="btn mt-5 bg-orange-500 rounded-full w-32 ">Details</button></Link>
            </div>
          
        </div>
    );
};

export default TopSellerPartTwo;
