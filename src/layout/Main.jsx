import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

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