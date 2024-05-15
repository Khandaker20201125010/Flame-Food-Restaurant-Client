import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TopSellFood from "../TopSellFood/TopSellFood";
import Aboutus from "../Aboutus/Aboutus";
import Opentime from "../Opentime/Opentime";
import { Helmet } from "react-helmet";




const Home = () => {
  const allFoods = useLoaderData();
    return (
        <div>
          <Helmet>Home</Helmet>
           <Banner></Banner>
           <div className="mt-20">
             <TopSellFood allFoods={allFoods}></TopSellFood>
           </div>
           <Aboutus></Aboutus>
           <div className="m-auto text-center">
           <Opentime></Opentime>
           </div>
           
        </div>
       
        
    );
};

export default Home;