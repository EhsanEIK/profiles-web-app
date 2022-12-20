import React from 'react';
import logo from '../../assets/images/McDonaldsLogo.png';
import rightArrow from '../../assets/images/rightArrow.png';

const About = () => {
    return (
        <section className='container mx-auto lg:w-[75rem] lg:h-auto bg-white absolute lg:left-[5.25rem] lg:top-[23.938rem] border-[1px] border-[#D0D0D0] rounded-[10px]'>
            <div className='lg:flex mt-[2.5rem] mx-[2.5rem]'>
                <div>
                    <img src={logo} alt="logo" className='w-[9.375rem] h-[9.375rem]' />
                </div>
                <div className='ml-[2.5rem]'>
                    <h2 className='font-semibold text-[2.188rem] text-[#423D74]'>McDonalds</h2>
                    <p>Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
                    <div className='flex items-center mt-[0.875rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-[1.563rem] h-[1.563rem]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <p className='ml-[0.938rem]'>4.8/5</p>
                        <svg className='w-5 h-5 ml-[2.5rem]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <p className='ml-[0.813rem]'>mcdonalds.com</p>
                    </div>
                </div>
                <div className='flex ml-24'>
                    <button className='flex border-[0.063rem] border-[#B4B4B4] rounded-[10px] w-[7.875rem] h-[3.5rem] py-4 px-5'>
                        <img src={rightArrow} alt="rightArrow" className='m-0' />
                        <span className='text-[#878787] ml-[0.666rem]'>Share</span>
                    </button>
                    <button className='border-[0.063rem] border-[#B4B4B4] rounded-[5px] bg-[#7065F0] text-white w-[7.875rem] h-[3.5rem] py-4 px-5 ml-5'>
                        Call Now
                    </button>
                </div>
            </div>
            <div className='lg:flex mt-[2.5rem] mx-[2.5rem] pl-10'>
                <div>
                    <h1 className='font-semibold text-[1.938rem]'>52</h1>
                    <p className='font-normal text-[1.125rem]'>Total Businesses</p>
                </div>
                <div className="divider-x w-[0.5px] bg-[#C4BDFF] ml-[152px] mr-[30px]"></div>
                <div>
                    <h1 className='font-semibold text-[1.938rem]'>52</h1>
                    <p className='font-normal text-[1.125rem]'>Total views/month</p>
                </div>
                <div></div>
            </div>
            <div className='my-[2.5rem] mx-[2.5rem]'>
                <h1 className='font-medium text-[1.438rem]'>About Us</h1>
                <p className='font-medium text-[1.25rem] text-[#878787]'>Welcome to our happy meals store and bring your families and friends along and enjoy exciting offers !!!</p>
            </div>
        </section>
    );
};

export default About;