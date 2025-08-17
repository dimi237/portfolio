
export const ReleaseItem = ({ project }: { project: any }) =>
    <div className="w-full sm:w-[47%] lg:w-[32%] xl:w-[370px] h-[400px] p-[40px] rouned-[20px] hover:bg-black hover:shadow-lg transition-all duration-300 ease-in-out hover:text-white group rounded-[4px] border-[3px] boder-solid border-black ">
        <h2 className="font-bold text-black group-hover:text-white mb-4" >{project?.label}</h2>
        <p className="text-zinc-500 text-small group-hover:text-white mb-4">{project?.description}</p>
        <div className="w-full h-1 bg-black group-hover:bg-white transition-all duration-300 ease-in-out rounded-sm mb-4"></div>
        <h5 className="font-extrabold text-zinc-700 group-hover:text-white mb-4" >{project?.stack}</h5>
    </div>
