import React from 'react';
import logo from '../../assets/images/McDonaldsLogo.png';
import rightArrow from '../../assets/images/rightArrow.png';

const About = () => {
    return (
        <section className='container md:mx-auto mx-5 lg:w-[75rem] w-[350px] h-auto bg-white absolute lg:left-[5.25rem] lg:top-[23.938rem] top-[7rem] border-[1px] border-[#D0D0D0] rounded-[10px]'>
            {/* part-01 */}
            <div className='md:flex grid grid-cols-5 mt-[2.5rem] md:mx-[2.5rem] mx-[1.5rem]'>
                <div>
                    <img src={logo} alt="logo" className='lg:w-[9.375rem] lg:h-[9.375rem] w-16 h-16 md:mt-0 mt-2' />
                </div>
                <div className='md:flex col-span-4 md:ml-[2.5rem] ml-[1rem]'>
                    <div>
                        <h2 className='font-semibold text-[2.188rem] text-[#423D74]'>McDonalds</h2>
                        <p>Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
                        <div className='flex items-center mt-[0.875rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="md:w-[1.563rem] md:h-[1.563rem] w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p className='md:ml-[0.938rem] ml-2'>4.8/5</p>
                            <svg className='w-5 h-5 md:ml-[2.5rem] ml-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            <p className='md:ml-[0.813rem] ml-2'>mcdonalds.com</p>
                        </div>
                    </div>
                    <div className='flex md:ml-24 md:mt-0 mt-5'>
                        <button className='flex items-center border-[0.063rem] border-[#B4B4B4] rounded-[10px] md:w-[7.875rem] md:h-[3.5rem] w-24 h-full md:py-4 md:px-5 py-2 px-4'>
                            <img src={rightArrow} alt="rightArrow" className='md:w-full w-4 m-0' />
                            <span className='text-[#878787] md:ml-[0.666rem] ml-2 md:text-normal text-sm'>Share</span>
                        </button>
                        <button className='border-[0.063rem] border-[#B4B4B4] rounded-[5px] bg-[#7065F0] md:text-normal text-sm text-white md:w-[7.875rem] md:h-[3.5rem] w-24 h-full md:py-4 md:px-5 py-2 px-3 ml-5'>
                            Call Now
                        </button>
                    </div>
                </div>
            </div>
            {/* part-02 */}
            <div className='flex md:bg-white bg-slate-100 rounded-xl mt-[2.5rem] mx-[2.5rem] md:pl-10 md:p-0 p-7'>
                <div>
                    <h1 className='font-semibold md:text-[1.938rem] text-xl'>52</h1>
                    <p className='font-normal md:text-[1.125rem] text-base'>Total Businesses</p>
                </div>
                <div className="divider-x w-[0.5px] h-[60px] bg-[#ccc6ff] md:ml-[152px] md:mr-[30px] mx-5"></div>
                <div>
                    <h1 className='font-semibold md:text-[1.938rem] text-xl'>52</h1>
                    <p className='font-normal md:text-[1.125rem] text-base'>Total views/month</p>
                </div>
                <div></div>
            </div>
            {/* part-03 */}
            <div className='my-[2.5rem] mx-[2.5rem]'>
                <h1 className='font-medium md:text-[1.438rem] text-xl'>About Us</h1>
                <p className='font-medium md:text-[1.25rem] text-base text-[#878787]'>Welcome to our happy meals store and bring your families and friends along and enjoy exciting offers !!!</p>
            </div>
        </section>
    );
};

export default About;