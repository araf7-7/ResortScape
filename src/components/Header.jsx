import { Link } from "react-router-dom";

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
                                <Link to="/" className="hover:text-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Home</Link>

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold">ResortScape</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <Link to="/" className=" hover:text-white hover:bg-violet-600 hover:border-2 hover:border-violet-600 p-2 rounded-lg">Home</Link>

                        </ul>
                    </div>
                    <div className="navbar-end gap-3">
                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            <button className="self-center px-8 py-3 rounded">Sign in</button>
                            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;