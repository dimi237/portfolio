import React from "react"

export const SocialItem = ({ link, icon, label }: { link: string, label: string, icon?: any }) =>
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label="{label}">

        <div key={label} className="rounded-[4px] border-[3px] boder-solid border-black h-[48px] flex items-center justify-center transition-all duration-200 ease-in-out hover:bg-black group  aspect-square ">
            {React.cloneElement(icon, {
                height: 25,
                width: 25,
                className: "text-white group-hover:stroke-white group-hover:fill-white  transition",
            })}
        </div>
    </a>
