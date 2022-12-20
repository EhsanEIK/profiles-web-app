import React from 'react';
import Cards from '../Cards/Cards';

const Properties = () => {
    return (
        <section className='container md:pl-[82px] md:pr-4 md:mt-[450px] mt-[850px] mb-20'>
            <div className='flex justify-between md:mx-0 mx-7 mb-10'>
                <h1 className='text-[1.875rem] font-semibold text-[#423D74]'>Properties</h1>
                <button className='flex border-[1px] border-[#B4B4B4] rounded-[10px] py-3 px-[18px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className='ml-5'>Add New</span>
                </button>
            </div>
            <Cards></Cards>
        </section>
    );
};

export default Properties;