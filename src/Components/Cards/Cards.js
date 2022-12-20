import React from 'react';
import CardOne from './CardOne';
import CardThree from './CardThree';
import CardTwo from './CardTwo';

const Cards = () => {
    return (
        <div className='grid grid-cols-3 gap-8'>
            <CardOne></CardOne>
            <CardTwo></CardTwo>
            <CardThree></CardThree>
        </div>
    );
};

export default Cards;