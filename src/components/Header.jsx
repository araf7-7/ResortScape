import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Header = () => {
    const { logout, user } = UseAuth();

    const handleLogout = () => {
        logout(); // Invoke the logout function
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            <NavLink to="/" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Home</NavLink>
                            <Link to="/gallary" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Gallery</Link>
                            <NavLink to="/login" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Login</NavLink>
                            <NavLink to="/register" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Register</NavLink>
                            <Link to="/profile" className="hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Profile</Link>
                            <NavLink to="/userprofile"  className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Update Profile</NavLink>
                        </ul>
                    </div>
                    <div className="flex item-center">
                        <img src="/public/resort.png" alt="" className="w-14" />
                      <NavLink to="/" > <a className="btn btn-ghost text-2xl font-bold">ResortScape</a></NavLink>  
                    </div>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <Link to="/" className="hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Home</Link>
                        <Link to="/gallary" className="hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Gallery</Link>
                        <Link to="/profile" className="hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Profile</Link>
                        <Link to="/userprofile" className="hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Update Profile</Link>
                        
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="items-center  lg:flex">
                        {user ? (
                            <div className="dropdown dropdown-end lg:mr-10">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user.photoURL ? (
                                            <img src={user?.photoURL} alt={user?.displayName} />
                                        ) : (
                                            <span>{user?.displayName?.charAt(0)}</span> 
                                        )}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                                  <NavLink to="/profile">  <li><button className="btn btn-sm btn-ghost">{user?.displayName}</button></li></NavLink>
                                    <li><button className="btn btn-sm btn-ghost" onClick={handleLogout}>Logout</button></li> {/* Use handleLogout function */}
                                </ul>
                            </div>
                        ) : (
                            <><NavLink to="/login"><button className="self-center px-8 py-3 rounded hidden lg:flex">Login</button></NavLink>
                            <NavLink to="/register"><button className="self-center px-8 py-3 font-semibold rounded hidden lg:flex dark:bg-violet-600 dark:text-gray-50">Register</button></NavLink></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
