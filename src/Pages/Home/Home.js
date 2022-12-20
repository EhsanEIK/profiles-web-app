import React from 'react';
import About from '../../Components/About/About';
import Navbar from '../../Components/Navbar/Navbar';
import TopHeader from '../../Components/TopHeader/TopHeader';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopHeader></TopHeader>
            <About></About>
        </div>
    );
};

export default Home;