import React from 'react';
import Link from "next/link";

interface PageProps {
    title:string;
    subtitle:string;
    href:string;
}
const PageHeader = ({title,subtitle,href}:PageProps) => {
    return (
        <div className={" bg-section  bg-center min-h-[40vh] relative bg-fixed"}>
            <div className={"page-header flex items-center   "}>
                <div className={"max-container padding-container"}>
                    <div className={""}>
                        <h2 className={"text-[34px] text-gray-6"}>{title}</h2>
                        <p className={"text-[15px] text-gray-6"}> {subtitle}</p>
                    </div>

                </div>
                <div className={"w-full bg-green-10 py-6"}>
                    <div className={"max-container padding-container"}>
                        <Link href={"/"} className={"text-white hover:underline pr-2"}>Home</Link>
                        <Link href={"/"+href} className={"before:content-['/'] before:pr-2 capitalize"}>{href}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;