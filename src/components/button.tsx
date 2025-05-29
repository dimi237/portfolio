import React from "react";
import { ButtonProps } from "types/design";
export const Button: React.FC<ButtonProps> = ({ className, children }) => <button className={`${className} bg-black text-white text-large font-semibold py-[16px] px-[20px] rounded-[4px] flex gap-[8px]`}>{children}</button>
