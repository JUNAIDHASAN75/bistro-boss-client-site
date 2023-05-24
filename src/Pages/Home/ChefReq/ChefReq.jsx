import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import chef1 from '../../../assets/menu/pizza-bg.jpg'
import chef2 from '../../../assets/menu/salad-bg.jpg'
import chef3 from '../../../assets/menu/soup-bg.jpg'
import chef4 from '../../../assets/menu/pizza-bg.jpg'
import chef5 from '../../../assets/menu/salad-bg.jpg'
import chef6 from '../../../assets/menu/soup-bg.jpg'
const ChefReq = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'Should Try'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div>
            <Swiper
            
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        autoplay={true}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          <div className="w-full text-center">
          <img className="w-[50%] mx-auto" src={chef1} />
          <h3  className="text-2xl font-semibold">Pizza</h3>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600  text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full text-center">
          <img  className="w-[50%] mx-auto" src={chef2} />
          <h3  className="text-2xl font-semibold">Salads</h3>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600  text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full text-center">
          <img  className="w-[50%] mx-auto" src={chef3} />
          <h3  className="text-2xl font-semibold">Soups</h3>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600 text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full text-center">
          <img  className="w-[50%] mx-auto" src={chef4} />
          <h3  className="text-2xl font-semibold">Pizza</h3>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600 text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full text-center">
          <img  className="w-[50%] mx-auto" src={chef5} />
          <h3 className="text-2xl font-semibold">Salads</h3>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600  text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full text-center">
          <img  className="w-[50%] mx-auto" src={chef6} />
          <h3  className="text-2xl font-semibold">Soups</h3>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600 my-3 text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
          </div>
        </SwiperSlide>
        
      </Swiper>
            </div>
        </section>
    );
};

export default ChefReq;