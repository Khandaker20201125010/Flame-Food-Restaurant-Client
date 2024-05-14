import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import SingleMyList from "../SingleMyList/SingleMyList";


const Myfood = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/restaurant/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [user])
    return (
        <div>
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 p-5">
                {
                    items?.map(item => <SingleMyList key={item._id}
                        item={item}></SingleMyList>)
                }
            </div>
            
        </div>
    );
};

export default Myfood;