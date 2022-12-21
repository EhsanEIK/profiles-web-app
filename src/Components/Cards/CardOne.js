import React from 'react';
import dentist from '../../assets/images/dentist.png';
import bell from '../../assets/images/bell.png';

const CardOne = () => {
    return (
        <div className="lg:w-96 w-full bg-base-100 shadow-xl">
            <figure><img src={dentist} alt="Dentist" className='w-full' /></figure>
            <div className="card-body">
                <h3 className="text-xl text-[#7065F0] font-semibold">Dentist</h3>
                <h2 className="text-[1.563rem] text-[#000929] font-semibold">Saloni Dev</h2>
                <p className='text-[#878787] mt-1'>Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
                <div className="flex justify-between mt-8">
                    <div className='flex items-center gap-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7065F0" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='text-[#878787]'>11:00 a.m.-6:00 p.m.</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <img src={bell} alt="bell" className='w-5' />
                        <p className='text-lg text-[#FF9900] font-medium'>Pending</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardOne;