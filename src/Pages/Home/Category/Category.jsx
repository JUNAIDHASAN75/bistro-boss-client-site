
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <section>
            <SectionTitle  
            subHeading={"From 11.00am to 10.00pm "}
            heading={"Order Online"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className="text-4xl uppercase text-white shadow-lg -mt-20 text-center">salad</p>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide2} alt="" />
                <p className="text-4xl uppercase text-white shadow-lg -mt-20 text-center">Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide3} alt="" />
                <p className="text-4xl uppercase text-white shadow-lg -mt-20 text-center">soups</p>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide4} alt="" />
                <p className="text-4xl uppercase text-white shadow-lg -mt-20 text-center">Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide5} alt="" />
                <p className="text-4xl uppercase text-white shadow-lg -mt-20 text-center">salads</p>
                </SwiperSlide>
               
            </Swiper>
        </section>
    );
};

export default Category;