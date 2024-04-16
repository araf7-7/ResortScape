import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>

            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                                <NavLink to="/" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Home</NavLink>
                                <Link to="/gallary"  className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Gallery</Link>
                                <NavLink to="/login" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Login</NavLink>
                          
                            <NavLink to="/register" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Register</NavLink>

                            </ul>
                        </div>
                        <div className="flex item-center ">
                            <img src="/public/resort.png" alt="" className="w-14    " />
                            <a className="btn btn-ghost text-2xl font-bold">ResortScape</a>

                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <Link to="/" className=" hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Home</Link>
                            <Link to="/gallary" className=" hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Gallery</Link>

                        </ul>
                    </div>
                    <div className="navbar-end gap-3">
                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            <NavLink to="/login"><button className="self-center px-8 py-3 rounded">Login</button></NavLink>
                          
                            <NavLink to="/register"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Register</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;