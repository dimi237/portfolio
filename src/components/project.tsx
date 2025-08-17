import { LinkIcon } from "./icons/link";
const classNames = [
    "flex flex-col md:flex-row gap-10 md:gap-24 items-center justify-between",
    "flex flex-col md:flex-row-reverse gap-10 md:gap-24 items-center justify-between"
];
export const ProjectItem = ({ project, index }: { project: any, index: string }) =>
    <div key={index} className={classNames[(+index & 1)]}>
        <div className="flex w-full md:w-1/2">
            <div className="bg-cover flex w-full h-[370px] bg-no-repeat rounded-2xl bg-center" style={{
                backgroundImage: `url(${project?.image})`,
            }}></div>
        </div>
        <div className="flex justify-start items-start flex-col gap-6 w-full md:w-1/2">
            <div className="text-display font-extrabold text-wrap">{index}</div>
            <h2 className="font-bold">{project?.label}</h2>
            <p className="text-zinc-500 text-small">{project?.description}</p>
            <a href={project?.link}><LinkIcon /></a>
        </div>
    </div>