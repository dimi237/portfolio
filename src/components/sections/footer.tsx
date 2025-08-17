import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between items-center bg-black text-white">
            <img src="/images/logo-white.svg" alt="Dimitri Signe" className='w-26 md:w-[139px]' />
            <div className='text-white gap-2 flex flex-col'>
                <h6 className='font-semibold'>@ 2025 Dimitri Signe</h6>
                <h6 className='font-semibold'>All rights reserved </h6>
            </div>
        </footer>
    );
};

export default Footer;