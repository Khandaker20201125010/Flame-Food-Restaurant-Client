import TopSellerPartTwo from '../topSellpartwo/TopSellerPartTwo'
import { FaStar } from "react-icons/fa6";
const TopSellFood = ({allFoods}) => {

    
     
    const sorted = allFoods?.sort((a,b) => b.borrowedFoods -a.borrowedFoods).slice(0,6)
    console.log(sorted)
    

    return (
        
        <div className='container m-auto'>
            <div className='mt-20 m-auto text-center'>
                <h1 className='text-4xl font-bold' >Top Rated Food</h1>
                <p className='mt-5 text-xl '>Here are the top rated food showing which will help you to chose .</p>
                <div className='flex justify-center mt-5 text-yellow-500'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {
                sorted?.map((food,i) => <TopSellerPartTwo key={i} food={food}></TopSellerPartTwo> )
            }
         
        </div>
        </div>
    );
};

export default TopSellFood;
