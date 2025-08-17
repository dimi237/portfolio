export const ExpereinceItem = ({ experience }: { experience: any }) =>
    <div key={experience?.label} className="rounded-[8px] border-[1px] boder-solid border-zinc-500 px-[24px] py-[30px] hover:bg-zinc-800 transition-all duration-300 ease-in-out cursor-pointer max-w-[1000px]">
        <div className="flex flex-col md:flex-row  justify-between items-start gap-4 md:items-center mb-[16px]">
            <h4 className="text-white font-semibold">{experience?.label}</h4>
            <h6 className="font-semibold text-zinc-300">{experience?.date}</h6>
        </div>
        <p className="text-small font-regular text-zinc-300">{experience?.description}</p>
    </div>
