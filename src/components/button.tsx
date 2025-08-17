import { motion } from "motion/react";
import React from "react";
import { ButtonProps } from "types/design";
export const Button: React.FC<ButtonProps> = ({ className, children }) => <motion.button  whileHover={{ scale: 1.05 }} className={` bg-black text-white text-small py-[9px] md:text-large font-semibold md:py-[16px] px-[20px] rounded-[4px] flex gap-[8px] cursor-pointer hover:text-lg ${className}`}>{children}</motion.button>
