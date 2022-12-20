import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import TopHeader from '../../Components/TopHeader/TopHeader';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <TopHeader></TopHeader>
        </div>
    );
};

export default Home;