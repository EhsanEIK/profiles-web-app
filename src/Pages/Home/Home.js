import React from 'react';
import About from '../../Components/About/About';
import Navbar from '../../Components/Navbar/Navbar';
import Properties from '../../Components/Properties/Properties';
import TopHeader from '../../Components/TopHeader/TopHeader';

const Home = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <TopHeader></TopHeader>
            <About></About>
            <Properties></Properties>
        </div>
    );
};

export default Home;