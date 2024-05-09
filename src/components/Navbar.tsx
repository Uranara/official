import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import {AlignJustify, ChevronDown} from "lucide-react";

const Navbar = () => {
    return (
        <nav className={" flex justify-center"}>
            <div className={" flex  justify-between  items-center  max-container padding-container z-30 py-5 absolute w-full"}>

                <Link href={"/"} className={"transition-transform transform skew-x-0  hover:skew-x-12"}>
                    <Image src={"/logo.png"} alt={"logo"} width={108} height={28}></Image>
                </Link>
                <ul className={"hidden h-full gap-12 lg:flex   "}>
                    <li>
                        <Link href={"/"} key={"Home"}
                              className={""}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"} key={"About Us"}
                              className={"bold-16 flexCenter cursor-pointer text-gray-10  transition-all hover:text-green-10 "}>
                            About us
                        </Link>
                    </li>
                    <li className={"group"}>
                        <Link href={"/service"} key={"Services"}  >
                            Services
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={"/"}>Services</Link></li>
                            <li><Link href={"/"}>Single Services</Link></li>
                            <li><Link href={"/"}>Pricing</Link></li>
                        </ul>

                    </li>

                    <li className={"group"}>
                        <Link href={"/case"} key={"Case"}>
                            Case
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={"/"}>Projects</Link></li>
                            <li><Link href={"/"}>Single Projects</Link></li>
                            <li><Link href={"/"}>success cases</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link href={"/contact"} key={"Contact Us"}>
                            Contact Us
                        </Link>
                    </li>

                </ul>
                <div className={"lg:flexCenter hidden"}>
                    <Button
                        type="button"
                        title="Login"
                        icon="user.svg"
                        variant="btn_dark_green"
                    >
                    </Button>
                </div>

                <AlignJustify size={32}  color="#46a96a" className={"inline-block cursor-pointer  lg:hidden"} />
            </div>

        </nav>
    );
};

export default Navbar;