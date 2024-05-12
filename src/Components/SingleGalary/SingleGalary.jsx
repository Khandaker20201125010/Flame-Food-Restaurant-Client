import { useState } from "react";

const SingleGalary = ({ food }) => {
    const { _id, shortDescription, country, price, quantity, foodCategory, foodName, name, email, Image } = food
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    }
    return (
        <div>
            <div>
                <div
                    className="relative"
                    onMouseEnter={toggleOverlay}
                    onMouseLeave={toggleOverlay}
                >
                    <div className="w-full bg-base-100 shadow-xl rounded-2xl animate__animated animate__zoomIn">
                        <img
                            className="w-full h-80 object-cover rounded-2xl"
                            src={Image}
                            alt="Food"
                        />
                    </div>
                    {isOverlayVisible && (
                        <div className="overlay absolute inset-0  text-center items-center bg-black bg-opacity-50 text-white">
                            <div className="overlay-content text-center mt-20">
                                <p>User: {name}</p>
                                <p>Feedback: [User's Feedback Here]</p>
                            </div>
                            <div>
                                <button className="btn w-44 text-center m-auto font-bold  mt-10 bg-orange-500" onClick={() => document.getElementById('my_modal_1').showModal()}>Add</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="card w-96 bg-base-100 shadow-xl text-black">
                                        <figure><img className="w-full h-80 object-cover rounded-2xl" src={Image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title font-bold">{name}</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleGalary;