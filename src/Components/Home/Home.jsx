import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TopSellFood from "../TopSellFood/TopSellFood";
import Aboutus from "../Aboutus/Aboutus";




const Home = () => {
  const allFoods = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <div className="mt-20">
             <TopSellFood allFoods={allFoods}></TopSellFood>
           </div>
           <Aboutus></Aboutus>
        </div>
        
    );
};

export default Home;