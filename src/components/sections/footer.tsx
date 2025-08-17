import { motion } from 'motion/react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between items-center bg-black text-white">
            <motion.div
                whileHover={{ scale: 1.05 }}
            >
            <img src="/images/logo-white.svg" alt="Dimitri Signe" className='w-26 md:w-[139px]' /></motion.div>
            <div className='text-white gap-2 flex flex-col'>
                <h6 className='font-semibold'>@ 2025 Dimitri Signe</h6>
                <h6 className='font-semibold'>All rights reserved </h6>
            </div>
        </footer>
    );
};

export default Footer;