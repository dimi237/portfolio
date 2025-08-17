import { Button } from 'components/button';
import { DetailsIcon } from 'components/icons';
import { X } from 'components/icons/cross';
import { DownloadIcon } from 'components/icons/download';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';

type Props = {
    sections: {
        id: string;
        label: string;
        hidden?: boolean;
    }[];
    setActiveSection?: (sectionId: string) => void;
    isMenuOpen?: boolean;
    setIsMenuOpen?: (isOpen: boolean) => void;
};
const Header: React.FC<Props> = ({ sections, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }} className="flex justify-between items-center transition-all duration-300 ">
            <motion.div
                whileHover={{ scale: 1.05 }}
            >
                <img src="/images/logo-black.svg" alt="Dimitri Signe" className='w-26 md:w-[139px]' /></motion.div>
            <div className="hidden sm:flex justify-center items-center">
                <nav>
                    <ul className="flex gap-[32px]">
                        {sections.filter((elt) => !elt.hidden).map((section, index) => (
                            <li key={section.id} className='group cursor-pointer' onClick={() => { setActiveSection && setActiveSection(section.id) }}>
                                <motion.div whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }} className='transition-all duration-300 '>
                                    <h5 className='font-semibold text-black'>{section.label}</h5>
                                    <div className="border-t-4 border-black rounded-xl transition-all duration-200 ease-in-out w-0 group-hover:w-11/12"></div>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <Button className='hidden sm:flex' >Resume <DownloadIcon stroke='white' /></Button>
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen && setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
                <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={24} className='text-white' />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <DetailsIcon size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-black backdrop-blur-lg border-t border-gray-100"
                    >
                        <div className="py-4">
                            {sections.filter((elt) => !elt.hidden).map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setActiveSection && setActiveSection(item.id)}
                                    className={`block w-full text-left px-6 py-3 text-base font-medium transition-all duration-200 text-gray-100 hover:text-blue-600 hover:bg-gray-50 `}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;