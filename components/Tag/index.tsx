import { FunctionComponent, ReactNode } from "react";

interface TagProps{
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "inverse" | "light" | "dark";
    color?: string;
    textSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
    circle?: boolean;
    children: ReactNode;
}

export const Tag: FunctionComponent<TagProps> = (props) => {
    const { type, color, textSize, circle, children } = props;

    let colorStyle = color ? `bg-${color}` : "bg-brand-primary" ;

    if (type === "primary") colorStyle = "bg-primary-color";
    if (type === "secondary") colorStyle = "bg-secondary-color";
    if (type === "success") colorStyle = "bg-success-color";
    if (type === "danger") colorStyle = "bg-danger-color";
    if (type === "warning") colorStyle = "bg-warning-color";
    if (type === "inverse") colorStyle = "bg-white text-brand-primary";
    if (type === "light") colorStyle = "bg-light-color";
    if (type === "dark") colorStyle = "bg-dark-color";

    const styles = [
        "py-1 px-2 text-white gap-x-3 flex justify-between items-center",
        colorStyle,
        textSize ? `text-${textSize}` : "text-base",
        circle? "rounded-full" : "rounded-md",
    ];

    return (
        <span className={styles.join(" ")}>
            {children}
        </span>
    )
}