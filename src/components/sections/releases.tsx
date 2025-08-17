import { ReleaseItem } from 'components/release';
import React from 'react';

const Releases: React.FC = () => {

    const releases = [
        { label: 'Central notification', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Python', },
        { label: 'Automation Script', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Typescript' },
        { label: 'Address book', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', stack: 'Express' },
    ];
    return (
        <section className=" flex flex-col items-center">
            <span className="text-display font-regular">My Small <span className='font-extrabold'>Projects</span></span>
            <ul className="w-full flex lg:justify-between  flex-col md:flex-row gap-4 mt-16 flex-wrap">
                {releases.map((project) =>
                    <ReleaseItem project={project} />
                )}

            </ul>
        </section>
    );
};

export default Releases;