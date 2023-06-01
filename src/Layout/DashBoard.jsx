import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaHamburger, FaHome, FaShopify, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
// import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useCart from "../Hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();

    // TODO : laod data from the server to to have dynamic isAdmin based on data
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 uppercase ">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink> </li>
                            <li><NavLink to="/dashboard/reservations"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaHamburger></FaHamburger>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/bookings"><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>
                            {/* <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <p className="badge badge-secondary">+{cart?.length || 0}</p>

                            </NavLink></li> */}
                        </> :

                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink> </li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <p className="badge badge-secondary">+{cart?.length || 0}</p>

                                </NavLink></li>
                            </>
                    }

                    {/* <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink> </li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                        <p className="badge badge-secondary">+{cart?.length || 0}</p>

                    </NavLink></li> */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaHamburger></FaHamburger> Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShopify></FaShopify> Order Food</NavLink></li>
                    <li><NavLink >Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;