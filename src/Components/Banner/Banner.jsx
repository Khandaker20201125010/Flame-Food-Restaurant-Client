

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="w-full ">
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='slide slide1'>
                        <div className='bg-black/30 flex justify-center'>
                            <div className='m-auto'>
                                <h1 className='text-8xl text-center text-white m-auto font-bold'>Tandoori roti</h1>
                                <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Experience the tantalizing flavors of our Tandoori Roti with a variety of delectable options. From classic garlic-infused to cheese-stuffed, each roti is freshly baked to perfection, delivering an explosion of taste with every bite. Come savor the diversity of our Tandoori Roti selection and elevate your dining experience.</p>

                                <div className='m-auto text-center mt-5'>
                                    <Link to={`/AllFoods`}>
                                    <button className='btn text-white w-40 rounded-2xl btn-outline hover:bg-orange-600 text-xl'>See All Food</button>
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='slide slide2'>
                        <div className='bg-black/30 flex justify-center'>
                            <div className='m-auto'>
                                <h1 className='text-8xl text-center text-white m-auto font-bold'>Pizza</h1>
                                <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Indulge in our mouthwatering pizzas, crafted with love and authenticity. Each bite is a symphony of flavors, from our homemade crust to the freshest toppings. Join us and experience the true essence of Italian cuisine</p>
                                <div className='m-auto text-center mt-5'>
                                    <Link to={`/AllFoods`}>
                                    <button className='btn text-white w-40 rounded-2xl btn-outline hover:bg-orange-600 text-xl'>See All Food</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className='slide slide3'>
                        <div className='bg-black/30 flex justify-center'>
                            <div className='m-auto'>
                                <h1 className='text-8xl text-center text-white m-auto font-bold'>Mega Burger</h1>
                                <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Introducing our Mega Burger – a colossal creation thats sure to satisfy your cravings! Packed with juicy, flame-grilled patties, layers of melted cheese, crisp lettuce, ripe tomatoes, and our special sauce, its a mouthwatering masterpiece thats larger than life. Treat yourself to the ultimate burger experience and indulge in our Mega Burger today</p>
                                <div className='m-auto text-center mt-5'>
                                    <Link to={`/AllFoods`}>
                                    <button className='btn text-white w-40 rounded-2xl btn-outline hover:bg-orange-600 text-xl'>See All Food</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className='slide slide4'>
                        <div className='bg-black/30 flex justify-center'>
                            <div className='m-auto'>
                                <h1 className='text-8xl text-center text-white m-auto font-bold'>Biryani</h1>
                                <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'>Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables or paneer for the meat.</p>
                                <div className='m-auto text-center mt-5'>
                                   <Link to={`/AllFoods`}>
                                    <button className='btn text-white w-40 rounded-2xl btn-outline hover:bg-orange-600 text-xl'>See All Food</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className='slide slide5'>
                        <div className='bg-black/30 flex justify-center w-full'>
                            <div className='m-auto'>
                                <h1 className='text-8xl text-center text-white m-auto font-bold'>Cream Cake</h1>
                                <p className='text-xl text-center m-auto w-2/3 text-white mt-5 font-bold'> It's the perfect dessert to make on a whim: There's no need to paddle butter and sugar together or bring your ingredients to room temperature.</p>
                                <div className='m-auto text-center mt-5'>
                                    <Link to={`/AllFoods`}>
                                    <button className='btn text-white w-40 rounded-2xl btn-outline hover:bg-orange-600 text-xl'>See All Food</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </>

        </div>
    );
};

export default Banner;