import { LinkIcon } from "./icons/link";

export const ProjectItem = ({ project, index }: { project: any, index: string }) =>
    <div key={index} className={`flex flex-col md:flex-row${(+index & 1) === 0 ? '-reverse':' '} gap-24 items-center justify-between`}>
        <div className="flex">
            <div className="bg-cover flex flex-1 w-[495px] h-[370px] bg-no-repeat rounded-2xl bg-center" style={{
                backgroundImage: `url(${project?.image})`,
            }}></div>
        </div>
        <div className="flex justify-start items-start flex-col gap-6">
            <div className="text-display font-extrabold text-wrap">{index}</div>
            <h2 className="font-bold">{project?.label}</h2>
            <p className="text-zinc-500 text-small">{project?.description}</p>
            <a href={project?.link}><LinkIcon /></a>
        </div>
    </div>
