import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="text-center align-middle error min-h-screen lo fo p-64">
            <Link to={'/'} >
            <button className="btn mt-10  bg-orange-300">Go back Home</button>
            </Link>
            
            
        </div>
    );
};

export default Error;