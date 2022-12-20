import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='mr-5 px-10 py-3'><Link>Manage Property</Link></li>
        <li className='mr-5 px-16 py-3'><Link>Blog</Link></li>
    </>
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case font-semibold text-[2.188rem]" style={{ color: '#262064' }}>Leads4Needs</Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {menuItems}
                    </ul>
                    <button className="text-white px-12 py-3" style={{
                        background: "#7065F0", borderRadius: "10px"
                    }}>Log In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;