import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertsImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import drinkImg from '../../../assets/menu/drinks.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] =useMenu();
    const desserts = menu.filter(item=>item.category === 'dessert'); 
    const soup = menu.filter(item=>item.category === 'soup'); 
    const salad = menu.filter(item=>item.category === 'salad'); 
    const pizza = menu.filter(item=>item.category === 'pizza'); 
    const drinks = menu.filter(item=>item.category === 'drinks'); 
    const offered = menu.filter(item=>item.category === 'offered'); 
    return (
        
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"}></Cover>
            
            
            <SectionTitle
            subHeading={"Don's Miss"}
            heading={"today's offer"}
            ></SectionTitle>
            {/* offered items */}
            <MenuCategory
            items={offered}
            ></MenuCategory>
            {/* desserts items */}
            <MenuCategory items={desserts} title={"desserts"} img={dessertsImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={drinks} title={"drinks"} img={drinkImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;