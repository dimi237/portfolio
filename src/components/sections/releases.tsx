import { ReleaseItem } from 'components/release';
import { motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

const Releases: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const intervalRef = useRef(null);
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };


    const releases = [
        { label: 'Central notification', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Python', },
        { label: 'Central notification', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Python', },
        { label: 'Central notification', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Python', },
        { label: 'Central notification', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Python', },
        { label: 'Automation Script', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Typescript' },
        { label: 'Address book', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Express' },
        { label: 'Automation Script', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Typescript' },
    ];
    useEffect(() => {
        if (isAutoPlaying && !isDragging) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % releases.length);
            }, 4000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isAutoPlaying, isDragging, releases.length]);
    return (
        <section className=" flex flex-col items-center">
            <span className="text-display font-regular text-black">My Small <span className='font-extrabold'>Projects</span></span>
            <div className="hidden lg:block">

                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex transition-transform duration-700 ease-in-out gap-4 mt-16"
                        style={{
                            transform: `translateX(-${currentIndex * 5}%)`,
                        }}
                    >
                        {/* <ul className="w-full flex lg:justify-between  flex-col md:flex-row gap-4 mt-16 flex-wrap"> */}
                        {[...releases, ...releases].map((project,index) => (
                            <motion.div
                                key={`${index}`}
                                className="flex-none px-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (index % 4) * 0.1 }}
                            >
                                <motion.div
                                    className={`w-full overflow-hidden group cursor-pointer`}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                > < ReleaseItem project={project} /></motion.div></motion.div>
                        )

                        )}

                        {/* </ul> */}
                    </motion.div></div>
                <div className="flex justify-center mt-8 space-x-2">
                    {releases.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                ? 'bg-black scale-125'
                                : 'bg-black/40 hover:bg-black/60'
                                }`}
                        />
                    ))}
                </div>
            </div>
            <div className="lg:hidden">
                <ul className="w-full flex lg:justify-between  flex-col md:flex-row gap-4 mt-16 flex-wrap">
                    {releases.map((project) =>
                        <ReleaseItem project={project} />
                    )}

                </ul>
            </div>
        </section>
    );
};

export default Releases;