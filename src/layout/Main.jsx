import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;