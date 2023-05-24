import { Link } from 'react-router-dom';
import profile from '../../../assets/others/profile.png'
const NavBar = () => {
    const navOptoins = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Contact US</Link></li>
        <li><Link to="/">DASHBOARD</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>  
        <li><Link to="/order/salad">Order Food</Link>
        </li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white  max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
                            {navOptoins}
                        </ul>
                    </div>
                    <div className='space-y-0'>
                    <a className="btn btn-ghost  text-xl uppercase">Bistro Boss</a>
                    <br />
                    <p className='tracking-widest md:ms-4 uppercase '>Restaurant</p>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase pr-3">
                        {navOptoins}
                    </ul>
                </div>
                <div className="md:pr-3 navbar-end">
                    <a className="btn btn-link text-white no-underline">sign Out</a>
                    <img className='w-[30px] rounded-full' src={profile} alt="" />
                </div>
            </div>
        </>
    );
};

export default NavBar;