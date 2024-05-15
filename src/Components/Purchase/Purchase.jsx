import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

const Purchase = () => {
    const { user } = useContext(AuthContext)
    const handleUpdate = (_id) => {
       
        // e.preventDefault()
        const foodName = document.getElementById('foodName').value;
        const price = document.getElementById('price').value;
        const buyingDate = document.getElementById('buyingDate').value;
        const quantity = document.getElementById('quantity').value;
        const buyersName = user?.displayName
        const buyersEmail = user?.email

    }

    return (
        <div>
            <div className="max-w-lg mx-auto mt-10">
                <div className="bg-orange-200 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl mb-4 font-bold">Purchase Food</h2>
                    <div className="mb-4">

                        <label className="block text-gray-700 text-sm font-bold mb-2" >Your Purchase</label>
                        <input type="text" name="buyersName" disabled='disabled' defaultValue={user?.displayName} placeholder='Your Name' className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-black leading-tight focus:outline-none  focus:shadow-outline" />

                        <input type="text" disabled='disabled'name="buyersEmail"  defaultValue={user?.email} placeholder='Your email' className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-black leading-tight focus:outline-none  focus:shadow-outline" />

                        <input type="text" name="foodName" id="foodName" rows="4" placeholder=" Food Name " className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                        <input type="text" name="price" id="price" rows="4" placeholder="Price" className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                        <input type="text" name="quantity" id="quantity" rows="4" placeholder="Quantity" className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

                        <input type="text" name="buyingDate" id="buyingDate" rows="4" placeholder="Buying Date" className="resize-none border mt-2 w-full rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex items-center justify-end">
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Purchase;