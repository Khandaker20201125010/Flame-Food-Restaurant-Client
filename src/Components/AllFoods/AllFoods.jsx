import { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";

const AllFoods = () => {
  const [allFood,setAllFood] = useState([]);
  useEffect (()=>{
    fetch('http://localhost:5000/restaurant')
    .then(res =>res.json())
    .then(data =>setAllFood(data))
  },[])

    return (
        <div className="min-h-screen grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 p-5">
            {
                allFood?.map(food =><SingleFood key={food._id} food={food}></SingleFood>)
            }
        </div>
    );
};

export default AllFoods;