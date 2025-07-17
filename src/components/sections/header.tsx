import { Button } from 'components/button';
import { DownloadIcon } from 'components/icons/download';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center">
            <img src="/images/logo-black.svg" alt="Dimitri Signe" className='w-[139px]' />
            <div className="flex justify-center items-center">
                <nav>
                    <ul className="flex gap-[32px]">
                        <li><a href="#about" className="text-black"> <h5 className='font-semibold'>About Me</h5></a></li>
                        <li><a href="#projects" className="text-black"> <h5 className='font-semibold'>Skills</h5></a></li>
                        <li><a href="#projects" className="text-black"> <h5 className='font-semibold'>Projects</h5></a></li>
                        <li><a href="#contact" className="text-black"> <h5 className='font-semibold'>Contact Me</h5></a></li>
                    </ul>
                </nav>
            </div>
            <Button>Resume <DownloadIcon stroke='white' /></Button>
        </header>
    );
};

export default Header;