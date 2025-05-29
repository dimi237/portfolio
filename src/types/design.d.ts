export type SGVProps = {
    className?: string;
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
    stroke?: string;
    viewBox?: string;
    xmlns?: string;
    onClick?: () => void;
}

export type ButtonProps = {
    className?: string;
    children?: React.ReactNode | React.ReactNode[] | string;
}