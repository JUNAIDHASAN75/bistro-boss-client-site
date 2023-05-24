import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured bg-fixed text-white pt-8 my-12 ">
            <SectionTitle
            subHeading={'Check it Out'}
            heading={'featured item'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 ">
                <div>
                    <img  className="" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug 20 ,2023</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio eius, nisi eum, possimus assumenda magnam nemo labore aperiam eligendi asperiores expedita placeat culpa pariatur dicta nostrum. Qui accusamus esse aperiam! Amet, voluptatum. Velit, saepe? Aperiam eligendi doloremque voluptatem expedita fuga magni perspiciatis.</p>
                    <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600 text-white hover:border-b-yellow-600">Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;