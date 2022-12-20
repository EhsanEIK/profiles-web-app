import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='mr-5 '><Link>Manage Property</Link></li>
        <li className='mr-5 '><Link>Blog</Link></li>
    </>
    return (
        <nav className='container mx-auto'>
            <div className="flex justify-between items-center bg-base-100 py-2 px-4">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case font-semibold md:text-[2.188rem] text-2xl" style={{ color: '#262064' }}>Leads4Needs</Link>
                </div>
                <div className="flex">
                    <ul className="menu menu-horizontal px-1 hidden md:flex">
                        {menuItems}
                    </ul>
                    <button className="text-white px-5" style={{
                        background: "#7065F0", borderRadius: "10px"
                    }}>Log In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;