
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div >
            <Nav></Nav> 
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        
            
        </div>
    );
};

export default Main;