import { GithubIcon } from 'components/icons/github';
import { LinkedinIcon } from 'components/icons/linkedin';
import { XIcon } from 'components/icons/x';
import { HeroIllustration } from 'components/illustrations/hero';
import React from 'react';

const Hero: React.FC = () => {
    const socialLinks = [
        { name: 'Github', url: '', icon: GithubIcon },
        { name: 'X', url: '', icon: XIcon },
        { name: 'LinkedIn', url: '', icon: LinkedinIcon },
    ];
    return (
        <section className="px-[32px] py-[60px] flex items-center justify-between h-[716px]">
            <div className="flex flex-col gap-6 w-full items-start w-1/2">
                <div className="text-display font-regular">
                    Hello I am <span className='text-display  font-extrabold'>Dimitri Signe</span>
                </div>
                <span className='text-display  font-extrabold'>
                    Software <span className='text-outlined font-extrabold'>Engineer</span>
                </span>
                <div className="text-display font-regular">
                    Based in <span className='text-display  font-extrabold'>Cameroun</span>
                </div>
                <p className="text-medium font-regular text-zinc-500">
                    I'm Dimitri Signe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>

                <div className="flex gap-[32px] items-center">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.url} className="rounded-[4px] border-[3px] boder-solid border-black p-[20px] flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-black group">
                            {React.cloneElement(<link.icon />, {
                                height: 30,
                                width: 30,
                                className: "text-white group-hover:stroke-white group-hover:fill-white",
                            })}
                        </a>
                    ))}
                </div>

            </div>
            <div className="h-full"><HeroIllustration /></div>
        </section >
    );
};

export default Hero;