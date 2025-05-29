import OutlinedText from "components/outlined-text";

function Typography() {

    return (
        <div className="p-8">
            <div className="text-[40px] font-semibold">Sora</div>
            <div className="text-[72px] font-semibold">Ag</div>
            <p className="text-[32px] font-regular uppercase">abcdefghijklmnopqrstuvwxyz</p>
            <p className="text-[32px] font-regular">abcdefghijklmnopqrstuvwxyz</p>
            <p className="text-[32px] font-regular">0123456789!@#$%^&*()</p>
            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Display text</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <div className="text-display font-regular">Heading <br /> Regular</div>
                    <div className="text-display font-semibold">Heading <br /> SemiBold</div>
                    <div className="text-display font-bold">Heading <br /> Bold</div>
                    <div className="text-display font-extrabold">Heading <br /> ExtraBold</div>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Outlined</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <OutlinedText fontSize="48" strokeWidth="3">Heading <br /> Regular</OutlinedText>
                    <OutlinedText fontSize="48" strokeWidth="4">Heading <br /> SemiBold</OutlinedText>
                    <OutlinedText fontSize="48" strokeWidth="5">Heading <br /> Bold</OutlinedText>
                    <OutlinedText fontSize="48" strokeWidth="6">Heading <br /> ExtraBold</OutlinedText>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Display text (M)</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <span className="text-display-medium font-regular">Heading <br /> Regular</span>
                    <span className="text-display-medium font-semibold">Heading <br /> SemiBold</span>
                    <span className="text-display-medium font-bold">Heading <br /> Bold</span>
                    <span className="text-display-medium font-extrabold">Heading <br /> ExtraBold</span>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Outlined (M)</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <OutlinedText fontSize="28" strokeWidth="1.4">Heading <br /> Regular</OutlinedText>
                    <OutlinedText fontSize="28" strokeWidth="1.6">Heading <br /> SemiBold</OutlinedText>
                    <OutlinedText fontSize="28" strokeWidth="1.8">Heading <br /> Bold</OutlinedText>
                    <OutlinedText fontSize="28" strokeWidth="2">Heading <br /> ExtraBold</OutlinedText>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Sub Heading</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <div className="subtitle font-regular">Sub Heading <br /> Regular</div>
                    <div className="subtitle font-semibold">Sub Heading <br /> SemiBold</div>
                    <div className="subtitle font-bold">Sub Heading <br /> Bold</div>
                    <div className="subtitle font-extrabold">Sub Heading <br /> ExtraBold</div>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Heading H1 </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <h1 className="font-regular">Heading H1  <br /> Regular</h1>
                    <h1 className="font-semibold">Heading H1  <br /> SemiBold</h1>
                    <h1 className="font-bold">Heading H1  <br /> Bold</h1>
                    <h1 className="font-extrabold">Heading H1  <br /> ExtraBold</h1>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Heading H2 </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <h2 className="font-regular">Heading H2  <br /> Regular</h2>
                    <h2 className="font-semibold">Heading H2  <br /> SemiBold</h2>
                    <h2 className="font-bold">Heading H2  <br /> Bold</h2>
                    <h2 className="font-extrabold">Heading H2  <br /> ExtraBold</h2>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Heading H3 </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <h3 className="font-regular">Heading H3  <br /> Regular</h3>
                    <h3 className="font-semibold">Heading H3  <br /> SemiBold</h3>
                    <h3 className="font-bold">Heading H3  <br /> Bold</h3>
                    <h3 className="font-extrabold">Heading H3  <br /> ExtraBold</h3>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Heading H4 </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <h4 className="font-regular">Heading H4  <br /> Regular</h4>
                    <h4 className="font-semibold">Heading H4  <br /> SemiBold</h4>
                    <h4 className="font-bold">Heading H4  <br /> Bold</h4>
                    <h4 className="font-extrabold">Heading H4  <br /> ExtraBold</h4>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Heading H5 </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <h5 className="font-regular">Heading H5  <br /> Regular</h5>
                    <h5 className="font-semibold">Heading H5  <br /> SemiBold</h5>
                    <h5 className="font-bold">Heading H5  <br /> Bold</h5>
                    <h5 className="font-extrabold">Heading H5  <br /> ExtraBold</h5>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Heading H6 </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <h6 className="font-regular">Heading H6  <br /> Regular</h6>
                    <h6 className="font-semibold">Heading H6  <br /> SemiBold</h6>
                    <h6 className="font-bold">Heading H6  <br /> Bold</h6>
                    <h6 className="font-extrabold">Heading H6  <br /> ExtraBold</h6>
                </div>
            </div>


            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Paragraph P1 </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <p className="text-large font-regular">Paragraph P1  <br /> Regular</p>
                    <p className="text-large font-semibold">Paragraph P1  <br /> SemiBold</p>
                    <p className="text-large font-bold">Paragraph P1  <br /> Bold</p>
                    <p className="text-large font-extrabold">Paragraph P1  <br /> ExtraBold</p>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Paragraph P2</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <p className="text-medium font-regular">Paragraph P2 <br /> Regular</p>
                    <p className="text-medium font-semibold">Paragraph P2 <br /> SemiBold</p>
                    <p className="text-medium font-bold">Paragraph P2 <br /> Bold</p>
                    <p className="text-medium font-extrabold">Paragraph P2 <br /> ExtraBold</p>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Paragraph P3</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <p className="text-small font-regular">Paragraph P3 <br /> Regular</p>
                    <p className="text-small font-semibold">Paragraph P3 <br /> SemiBold</p>
                    <p className="text-small font-bold">Paragraph P3 <br /> Bold</p>
                    <p className="text-small font-extrabold">Paragraph P3 <br /> ExtraBold</p>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Button text </div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <button className="text-large font-regular">Button text  <br /> Regular</button>
                    <button className="text-large font-semibold">Button text  <br /> SemiBold</button>
                    <button className="text-large font-bold">Button text  <br /> Bold</button>
                    <button className="text-large font-extrabold">Button text  <br /> ExtraBold</button>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Button text 2</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <button className="text-medium font-regular">Button text 2 <br /> Regular</button>
                    <button className="text-medium font-semibold">Button text 2 <br /> SemiBold</button>
                    <button className="text-medium font-bold">Button text 2 <br /> Bold</button>
                    <button className="text-medium font-extrabold">Button text 2 <br /> ExtraBold</button>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-zinc-500 font-[16px]">Underlined</div>
                <div className="bg-zinc-300 h-[2px] w-full my-4"></div>
                <div className="flex justify-between w-full">
                    <div className="underlined font-regular">Underlined <br /> Regular</div>
                    <div className="underlined font-semibold">Underlined <br /> SemiBold</div>
                    <div className="underlined font-bold">Underlined <br /> Bold</div>
                    <div className="underlined font-extrabold">Underlined <br /> ExtraBold</div>
                </div>
            </div>

        </div>
    );
};

export default Typography;