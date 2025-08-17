import { SkillsItem } from 'components/skills-item';
import React from 'react';
import { SpringIcon, PythonIcon, ReactIcon, JavaScriptIcon, ApiIcon, DockerIcon, NestIcon, NoSqlIcon, SqlIcon,JenskinsIcon,KafkaIcon,GraphQlIcon } from 'components/icons';

const Skills: React.FC = () => {
    const skills = [
        { label: 'Spring', icon: <SpringIcon />, description: 'A powerful framework for building Java applications.' },
        { label: 'Python', icon: <PythonIcon />, description: 'A versatile programming language for web, data, and AI.' },
        { label: 'React', icon: <ReactIcon />, description: 'A JavaScript library for building user interfaces.' },
        { label: 'JavaScript', icon: <JavaScriptIcon />, description: 'A programming language for web development.' },
        { label: 'No Sql', icon: <NoSqlIcon />, description: 'A style sheet language for designing web pages.' },
        { label: 'Docker', icon: <DockerIcon />, description: 'The standard markup language for web pages.' },
        { label: 'Nest', icon: <NestIcon />, description: 'A version control system for tracking code changes.' },
        { label: 'APIs & Architecture', icon: <ApiIcon />, description: 'A design pattern for building scalable web services.' },
        { label: 'Sql', icon: <SqlIcon />, description: 'A design pattern for building scalable web services.' },
        { label: 'Jenkins', icon: <JenskinsIcon />, description: 'A design pattern for building scalable web services.' },
        { label: 'GraphQL', icon: <GraphQlIcon />, description: 'A design pattern for building scalable web services.' },
        { label: 'Kafka', icon: <KafkaIcon />, description: 'A design pattern for building scalable web services.' },
    ];

    return (
        <section className="flex flex-col items-center">
            <span className="text-display font-regular text-black">My <span className='font-extrabold'>Skills</span></span>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-16  w-full">
                {skills.map((skill) => 
                    <SkillsItem skill={skill.label} icon={skill.icon} />
                )}

            </ul>
        </section>
    );
};

export default Skills;