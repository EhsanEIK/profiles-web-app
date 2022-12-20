import React from 'react';
import banner from '../../assets/images/cover.png';

const TopHeader = () => {
    return (
        <section>
            <img src={banner} alt="" className='w-full md:h-full h-[220px]' />
        </section>
    );
};

export default TopHeader;