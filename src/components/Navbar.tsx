"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import LocalSwitcher from "@/components/LocalSwitcher";
import {AlignJustify, ChevronDown, UserRound} from "lucide-react";
import {useLocale} from 'next-intl';
import {useTranslations} from 'next-intl';

const Navbar = () => {

    const localActive = useLocale()
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    const t = useTranslations('Navbar');
    return (
        <nav
            className={` h-[90px] fixed z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className={"max-container padding-container py-5  flex  items-center justify-between"}>
                <Link href={"/"} className={"transition-transform transform skew-x-0  hover:skew-x-12"}>
                    <Image src={"/logo.png"} alt={"logo"} width={108} height={28}></Image>
                    <p className={"flex justify-center text-green-5 text-[10px]"}>{t('CompanyName')}</p>
                </Link>
                <ul className={"hidden h-full grid-rows-5 gap-12 lg:flex "}>
                    <li className={"ml-6 "}>
                        <Link href={"/"} key={"Home"}
                              className={"nav-link"}>
                            {t('nav1')}
                        </Link>
                    </li>
                    <li className={"group ml-3 pl-3"}>
                        <Link href={`/${localActive}/about`} key={"About Us"}
                              className={"nav-link"}>
                            {t('nav2')}
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={`/${localActive}/content`} key={"Content"}
                                      className={"base-link"}> {t('nav2_1')}</Link></li>
                            <li><Link href={`/${localActive}/value`} key={"Value"}
                                      className={"base-link"}>{t('nav2_2')}</Link></li>
                            <li><Link href={`/${localActive}/system`} key={"System"}
                                      className={"base-link"}>{t('nav2_3')}</Link></li>
                        </ul>

                    </li>
                    <li className={"group ml-3 pl-3"}>
                        <Link href={`/${localActive}/cases`} key={"Cases"} className={"nav-link"}>
                            {t('nav3')}
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={`/${localActive}/consult`} key={"consult"}
                                      className={"base-link"}>{t('nav3_1')}</Link></li>
                        </ul>

                    </li>

                    <li className={"group ml-3 pl-3"}>
                        <Link href={`/${localActive}/news`} key={"News"} className={"nav-link"}>
                            {t('nav4')}
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={`/${localActive}/media`} key={"Media"}
                                      className={"base-link"}>{t('nav4_1')}</Link></li>
                        </ul>
                    </li>

                    <li className={"group ml-3 pl-3"}>
                        <Link href={`/${localActive}/contact`} key={"Contact Us"} className={"nav-link"}>
                            {t('nav5')}
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={`/${localActive}/recruit`} key={"Recruit"}
                                      className={"base-link"}>{t('nav5_1')}</Link></li>
                        </ul>
                    </li>


                </ul>

                <LocalSwitcher></LocalSwitcher>


                <div className={"lg:flexCenter hidden"}>
                    <Button
                        type="button"
                        title={t('login')}
                        icon={<UserRound size={24} color="#ffffff"/>}
                        variant="btn_dark_green"
                        href={"/"}
                    >
                    </Button>
                </div>
                <AlignJustify size={32} color="#46a96a" className={"inline-block cursor-pointer  lg:hidden"}/>
            </div>

        </nav>
    );
};

export default Navbar;