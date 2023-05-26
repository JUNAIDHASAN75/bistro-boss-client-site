import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallNow from "../CallNow/CallNow";
import Category from "../Category/Category";
import ChefReq from "../ChefReq/ChefReq";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallNow></CallNow>
            <ChefReq></ChefReq>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;