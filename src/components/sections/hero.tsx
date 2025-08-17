import { GithubIcon } from 'components/icons/github';
import { LinkedinIcon } from 'components/icons/linkedin';
import { ReeditIcon } from 'components/icons/reedit';
import { XIcon } from 'components/icons/x';
import { HeroIllustration } from 'components/illustrations/hero';
import { HeroMobileIllustration } from 'components/illustrations/hero-mobile';
import React from 'react';

const Hero: React.FC = () => {
    const socialLinks = [
        { name: 'Github', url: '', icon: GithubIcon },
        { name: 'X', url: '', icon: XIcon },
        { name: 'LinkedIn', url: '', icon: LinkedinIcon },
        { name: "Reedit", url: '', icon: ReeditIcon },

    ];
    return (
        <section>
            <div className="xl:mt-35 flex-col-reverse lg:flex-row flex lg:items-center justify-between">
                <div className="flex flex-col gap-3 lg:gap-6 items-start lg:w-3/6">
                    <span className="text-display font-regular text-wrap-nowrap">
                        Hello I am <span className='text-display  font-extrabold'>Dimitri Signe</span>
                    </span>
                    <span className='text-display  font-extrabold'>
                        Software <span className='text-outlined font-extrabold hidden md:inline'>Engineer</span>
                        <span className='text-outlined-medium font-extrabold md:hidden'>Engineer</span>
                    </span>
                    <div className="text-display font-regular">
                        Based in <span className='text-display  font-extrabold'>Cameroun</span>
                    </div>
                    <p className="text-medium font-regular text-zinc-500 text-wrap wit">
                        I'm Dimitri Signe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>

                    <div className="flex gap-[32px] items-center">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.url} className="rounded-[4px] border-[3px] boder-solid border-black p-[15px] lg:p-[20px] flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-black group">
                                {React.cloneElement(<link.icon />, {
                                
                                    className: "text-white group-hover:stroke-white group-hover:fill-white h-[20px] w-[20px] lg:h-[30px] lg:w-[30px] transition-all duration-200 ease-in-out",
                                })}
                            </a>
                        ))}
                    </div>

                </div>
                <HeroIllustration className='z-0 lg:absolute xl:right-26  xl:top-35 2xl:right-[20%]  hidden lg:block h-auto lg:w-[700px] xl:w-[auto] lg:right-14 lg:top-51' />
                <HeroMobileIllustration className='lg:hidden mb-12 w-[unset] h-auto'/>
            </div>
        </section >
    );
};

export default Hero;