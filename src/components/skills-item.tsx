import React from "react"

export const SkillsItem = ({ skill, icon }: { skill: string, icon?: any }) =>
    <div key={skill} className="rounded-[4px] border-[3px] boder-solid border-black p-[20px] lg:p-[30px] flex flex-col gap-4 items-center justify-center transition-all duration-200 ease-in-out hover:bg-black group  aspect-square h-40 lg:h-48">
        {React.cloneElement(icon, {
            height: 50,
            width: 50,
            className: "text-white group-hover:stroke-white group-hover:fill-white",
        })}

        <h5 className="font-bold group-hover:text-white "> {skill}</h5>

    </div>
