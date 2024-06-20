import React, {ReactNode} from 'react';
import Link from "next/link";
import {Atom} from "lucide-react";

type  ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: ReactNode;
    variant: string;
    href: string;
}
const Button = ({type, title, icon, variant, href}: ButtonProps) => {
    return (
        <Link href={href} passHref>
            <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
                {icon}
                <label className={"bold-16 whitespace-nowrap hover:cursor-pointer"}>{title}</label>
            </button>
        </Link>
    );
};

export default Button;