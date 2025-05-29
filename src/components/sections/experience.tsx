import { ExpereinceItem } from 'components/experience';
import React from 'react';

const Experiences: React.FC = () => {

    const experiences = [
        { label: 'Lead Software Engineer at Google', description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide..", date: 'Nov 2019 - Present' },
        { label: 'Software Engineer at Youtube', description: "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.", date: 'Jan 2017 - Oct 2019' },
        { label: 'Junior Software Engineer at Apple', description: 'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.', date: 'Jan 2016 - Dec 2017' },
    ];

    return (
        <section className="px-[32px] py-[60px] flex flex-col items-center bg-black text-white">
            <span className="text-display font-regular">My <span className='font-extrabold'>Experience</span></span>
            <ul className="w-full flex flex-col gap-4 mt-16">
                {experiences.map((experience) =>
                    <ExpereinceItem experience={experience} />
                )}

            </ul>
        </section>
    );
};

export default Experiences;