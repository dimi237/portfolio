import React from 'react';

interface OutlinedTextProps {
    children: any;
    color?: string;
    outlineColor?: string;
    fontSize?: string;
    strokeWidth?: string;
}

const OutlinedText: React.FC<OutlinedTextProps> = ({ children, color = 'black', outlineColor = 'white', fontSize, strokeWidth = '2' }) => {
    return (
        <svg>
                <text
                    x="50%" y="50%"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    fill={outlineColor}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    paint-order="stroke"
                    fontSize={fontSize}
                    letterSpacing={0.32}
                >

                    {children}
                </text>

        </svg >);
};

export default OutlinedText;