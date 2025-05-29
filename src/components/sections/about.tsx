import { AboutIllustration } from 'components/illustrations/about';
import React from 'react';

const About: React.FC = () => {


    return (
        <section className="px-[32px] py-[60px] flex flex-col md:flex-row items-start justify-between gap-[32px] bg-white text-black">
            <div className="h-full w-full md:w-1/2"><AboutIllustration /></div>
            <div className="h-full w-full md:w-1/2">
                <span className="text-display font-regular py-16">About <span className='font-extrabold'>Me</span></span>
                <p className="text-small font-regular text-zinc-500">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    <br />
                    <br />
                    I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    <br />
                    <br />
                    When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                </p>

            </div>
        </section>
    );
};

export default About;