import '../slidercss/Slider.css'
const Banner = () => {

    const nextSlide = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    };

    const prevSlide = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    return (
        <div className="bs ">
            <div className="slide ">
                <div className="item" style={{backgroundImage: "url(https://i.ibb.co/BPY9PZh/pexels-photo-958545-jpeg-cs-srgb-dl-pexels-chanwalrus-958545.jpg)"}}>
                    <div className="content">
                        <div className="name">Tandoori roti</div>
                        <div className="des">Experience the tantalizing flavors of our Tandoori Roti with a variety of delectable options. From classic garlic-infused to cheese-stuffed, each roti is freshly baked to perfection, delivering an explosion of taste with every bite. Come savor the diversity of our Tandoori Roti selection and elevate your dining experience.</div>
                        <button className="btn">Check All Foods</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(https://i.ibb.co/PmxmFz0/photo-1513104890138-7c749659a591-q-80-w-1000-auto-format-fit-crop-ixlib-rb-4-0.jpg)"}}>
                    <div className="content">
                        <div className="name">Pizza</div>
                        <div className="des w-full">Indulge in our mouthwatering pizzas, crafted with love and authenticity. Each bite is a symphony of flavors, from our homemade crust to the freshest toppings. Join us and experience the true essence of Italian cuisine.</div>
                        <button className="btn">Check All Foods</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(https://i.ibb.co/PTXj1dn/double-hamburger-isolated-on-white-background-fresh-burger-fast-food-with-beef-and-cream-cheese-real.jpg)"}}>
                    <div className="content">
                        <div className="name">Mega Burger</div>
                        <div className="des">Introducing our Mega Burger – a colossal creation thats sure to satisfy your cravings! Packed with juicy, flame-grilled patties, layers of melted cheese, crisp lettuce, ripe tomatoes, and our special sauce, its a mouthwatering masterpiece thats larger than life. Treat yourself to the ultimate burger experience and indulge in our Mega Burger today</div>
                        <button className="btn">Check All Foods</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(https://i.ibb.co/mH8HX7V/freeze-motion-wok-pan-with-flying-ingredients-9493-17229.jpg)"}}>
                    <div className="content">
                        <div className="name">Hot chilly mix</div>
                        <div className="des">Spice up your day with our sizzling Hot Chili Mix! Our tantalizing blend of assorted chili peppers, roasted to perfection and seasoned with savory spices, promises a fiery kick with every bite.</div>
                        <button className="btn">Check All Foods</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(https://i.ibb.co/VtpqqBd/mouthwatering-images-of-gourmet-dishes-free-photo.jpg)"}}>
                    <div className="content">
                        <div className="name">Salad</div>
                        <div className="des">Freshen up your meal with our vibrant salads! Handcrafted with crisp, garden-fresh greens, an array of colorful vegetables, and your choice of protein, our salads are a delicious and nutritious option for every palate.</div>
                        <button className="btn">Check All Foods</button>
                    </div>
                </div>
                <div className="item" style={{backgroundImage: "url(https://i.ibb.co/9qS6S3n/d151d1ef-11bd-4fd5-b9e2-5d4f07ff8e1e.jpg)"}}>
                    <div className="content">
                        <div className="name">Penygroes Tandoori</div>
                        <div className="des">Welcome to Penygroes Tandoori, where authentic flavors meet culinary excellence. Indulge in our exquisite selection of Tandoori delights, expertly prepared using traditional techniques and the finest ingredients.</div>
                        <button className="btn"> Check All Foods</button>
                    </div>
                </div>

            </div>

            <div className="button">
                <button className="prev text-white" onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next text-white" onClick={nextSlide}><i className="fa-solid fa-arrow-right item-center"></i></button>
            </div>

        </div>
    );
};

export default Banner;
