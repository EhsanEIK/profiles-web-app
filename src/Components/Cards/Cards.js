import React from 'react';
import CardOne from './CardOne';
import CardThree from './CardThree';
import CardTwo from './CardTwo';

const Cards = () => {
    return (
        <div className='grid xl:grid-cols-3 lggg:grid-cols-2 grid-cols-1 gap-8  md:mx-0 mx-5'>
            <CardOne></CardOne>
            <CardTwo></CardTwo>
            <CardThree></CardThree>
        </div>
    );
};

export default Cards;