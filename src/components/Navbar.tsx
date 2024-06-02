"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import LocalSwitcher from "@/components/LocalSwitcher";
import {AlignJustify, ChevronDown, Languages, UserRound} from "lucide-react";
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
                <ul className={"hidden h-full gird grid-rows-5 gap-12 lg:flex "}>
                    <li>
                        <Link href={"/"} key={"Home"}
                              className={"nav-link"}>
                            {t('nav1')}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${localActive}/about`} key={"About Us"}
                              className={"nav-link"}>
                            {t('nav2')}
                        </Link>
                    </li>
                    <li className={"group"}>
                        <Link href={`/${localActive}/services`} key={"Services"} className={"nav-link"}>
                            {t('nav3')}
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={`/${localActive}/services`} key={"Services"}
                                      className={"base-link"}> {t('nav3_1')}</Link></li>
                            <li><Link href={`/${localActive}/services`} key={"Single Services"}
                                      className={"base-link"}>{t('nav3_2')}</Link></li>
                            <li><Link href={`/${localActive}/services`} key={"Pricing"}
                                      className={"base-link"}>{t('nav3_3')}</Link></li>
                        </ul>

                    </li>

                    <li className={"group"}>
                        <Link href={`/${localActive}/case`} key={"Case"} className={"nav-link"}>
                            {t('nav4')}
                            <ChevronDown/>
                        </Link>
                        <ul className={"absolute p-8  space-y-4  rounded-xl  bg-white shadow-xl hidden group-hover:block"}>
                            <li><Link href={`/${localActive}/case`} key={"Projects"}
                                      className={"base-link"}>{t('nav4_1')}</Link></li>
                            <li><Link href={`/${localActive}/case`} key={"Single Projects"}
                                      className={"base-link"}>{t('nav4_2')}</Link></li>
                            <li><Link href={`/${localActive}/case`} key={"success cases"}
                                      className={"base-link"}>{t('nav4_3')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link href={`/${localActive}/contact`} key={"Contact Us"} className={"nav-link"}>
                            {t('nav5')}
                        </Link>
                    </li>

                </ul>
                <div className={""}>
                    {/*<Languages size={32} color="#46a96a" />*/}
                    <LocalSwitcher></LocalSwitcher>
                </div>

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