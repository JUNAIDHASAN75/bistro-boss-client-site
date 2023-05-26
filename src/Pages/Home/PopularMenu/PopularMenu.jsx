import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular')
    
    // console.log(menu)
    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Menu"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-4 my-12">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to="/menu"><button className="btn btn-outline border-0 border-b-4 "> View Full  Menu</button></Link>
            </div>


        </section>
    );
};

export default PopularMenu;