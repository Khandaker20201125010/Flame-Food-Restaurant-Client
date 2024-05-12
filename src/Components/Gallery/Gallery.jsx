import { useEffect, useState } from "react";
import SingleGalary from "../SingleGalary/SingleGalary";

const Gallery = () => {
    const [allFood, setAllFood] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/restaurant')
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [])

    return (
        <div>
            <div className="min-h-screen grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 p-5">
                {allFood?.map(food => <SingleGalary key={food._id} food={food}></SingleGalary>)}
            </div>
            
        </div>
    );
};

export default Gallery;