import { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";
import { Typewriter } from "react-simple-typewriter";

const AllFoods = () => {
    const [allFood, setAllFood] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/restaurant')
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [])

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    }
    const filteredFood = allFood.filter(food =>
        food.foodName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="all ao">
                <h1 className="text-center m-auto text-white text-8xl font-bold w-3/4">
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Welcome To All Food Page']}
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
            <form onSubmit={handleSearch} className="join flex justify-center mt-10">
                <input type="text" placeholder="Search Food" name="search" className="input input-bordered join-item w-96" />
                <button type="submit" className="btn bg-orange-500 join-item w-48">Search</button>
            </form>
            <div className="min-h-screen grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 p-5">
                {filteredFood.map(food => <SingleFood key={food._id} food={food}></SingleFood>)}
            </div>
        </div>
    );
};

export default AllFoods;
