import { useEffect, useState } from "react";
import SingleGalary from "../SingleGalary/SingleGalary";
import { Typewriter } from "react-simple-typewriter";

const Gallery = () => {
    const [allFood, setAllFood] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/restaurant')
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [])

    return (
        <div>
               <div className=" all ao ">
                <h1 className="text-center m-auto text-white text-8xl font-bold w-3/4">
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Welcome To All Food Gallery']}
                            loop={1}
                            cursor
                            cursorStyle='❤'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
            <div className="min-h-screen grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 p-5">
                {allFood?.map(food => <SingleGalary key={food._id} food={food}></SingleGalary>)}
            </div>
            
        </div>
    );
};

export default Gallery;