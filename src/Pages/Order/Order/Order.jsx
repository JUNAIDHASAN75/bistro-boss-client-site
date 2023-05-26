import Cover from "../../Shared/Cover/Cover";
import order from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover img={order} title={"OUR SHOP"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                {/* salad */}
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                {/* pizza */}
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                {/* soup */}
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                {/* desssert */}
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                {/* drinks */}
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;