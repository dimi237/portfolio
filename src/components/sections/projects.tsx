import { ProjectItem } from 'components/project';
import React from 'react';
import { formatIndexWithZeros } from 'utils/format';

const Projects: React.FC = () => {

    const projects = [
        { label: 'Crypto Screener Application', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', },
        { label: 'Euphoria - Ecommerce (Apparels) Website Template', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
        { label: 'Blog Website Template', description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.", link: '#', image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
    ];

    return (
        <section className="px-[32px] py-[70px] flex flex-col items-center bg-black text-white h-screen overflow-y-scroll scroll-none">
            <span className="text-display font-regular">My <span className='font-extrabold'>Projects</span></span>
            <ul className="w-full flex flex-col gap-20 mt-16">
                {projects.map((project, index) =>
                    <ProjectItem project={project} index={formatIndexWithZeros(projects.length, index + 1)} />
                )}

            </ul>
        </section>
    );
};

export default Projects;