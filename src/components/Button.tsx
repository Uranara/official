import React from 'react';
import Image from "next/image";
import Link from "next/link";

type  ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    href: string;
}
const Button = ({type, title, icon, variant, href}: ButtonProps) => {
    return (

        <Link href={href}>
            <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}  `}>
                {icon && <Image src={icon} alt={title} width={24} height={24}/>}
                <label className={"bold-16 whitespace-nowrap hover:cursor-pointer"}>{title}</label>
            </button>
        </Link>
    );
};

export default Button;