import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { useLoaderData } from "react-router-dom";
import SingleOrder from "../SingleOrder/SingleOrder";

const OrderedFood = () => {
    const {user} = useContext(AuthContext);
    const allFoods = useLoaderData()

    const borrowedFoods= allFoods?.filter(item => item.buyersEmail=== user?.email && item?.borrowedFoods > 0)
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
            {
                borrowedFoods?.map(food =><SingleOrder key={food._id} food={food}></SingleOrder>)
            }
          
        </div>
    );
};

export default OrderedFood;