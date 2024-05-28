"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import {AlignJustify, ChevronDown} from "lucide-react";

const Navbar = () => {
    const [isScrolled,setIsScrolled] =useState(false)
     useEffect(() =>{
         const handleScroll = () => {
           if(window.scrollY > 50){
               setIsScrolled(true)
           }else{
               setIsScrolled(false)
           }
         }
         window.addEventListener("scroll",handleScroll);
         return () =>{
             window.removeEventListener("scroll",handleScroll);
         }
     },[])

    return (
        <nav className={` h-[90px] fixed z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" :"bg-transparent" }`}>
            <div className={"max-container padding-container py-5  flex  items-center justify-between"}>
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
                        <Link href={"/services"} key={"Services"}>
                            Services
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={"/services"}>Services</Link></li>
                            <li><Link href={"/services"}>Single Services</Link></li>
                            <li><Link href={"/services"}>Pricing</Link></li>
                        </ul>

                    </li>

                    <li className={"group"}>
                        <Link href={"/case"} key={"Case"}>
                            Case
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={"/case"}>Projects</Link></li>
                            <li><Link href={"/case"}>Single Projects</Link></li>
                            <li><Link href={"/case"}>success cases</Link></li>
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
                <AlignJustify size={32} color="#46a96a" className={"inline-block cursor-pointer  lg:hidden"}/>
            </div>

        </nav>
    );
};

export default Navbar;