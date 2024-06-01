import React from 'react';
import Link from "next/link";
import {FOOTER_LINKS} from "@/constants";
import {Mail, MapPin, PhoneIncoming} from "lucide-react";
import {useTranslations} from 'next-intl';

const Footer = () => {
    const t = useTranslations('Footer');
    const keys = ["Services", "Information"] as const
    return (
        <footer className={"relative bg-footer-bg bg-cover bg-center h-full pt-[90px]"}>
            <div className={" max-container padding-container relative z-20 text-white"}>
                <div className={"grid grid-cols-4 gap-4 "}>
                    <div>
                        <h1 className={"text-6xl font-bold  mb-6"}>{t('title')}</h1>
                        <p className={"text-[14px] mb-4"}>{t('subtitle')}</p>
                        <h3 className={"mb-6 text-[20px]"}>{t('label')}</h3>
                        <div className={"flex flex-row"}>
                        </div>
                    </div>

                    {
                        keys.map((key,index) => (
                            <div key={index}>
                                <h1 className={"text-[24px] mb-6 font-bold"}>{t(`${key}.title`)}</h1>
                                <ul className={"flex flex-col"}>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links1`)}</Link>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links2`)}</Link>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links3`)}</Link>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links4`)}</Link>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links5`)}</Link>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links6`)}</Link>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links7`)}</Link>
                                    <Link href={"#"} className={"mb-3  hover:underline"}>{t(`${key}.links8`)}</Link>
                                </ul>
                            </div>
                        ))
                    }


                    <div>
                        <h1 className={"text-[24px] mb-6 font-bold"}>{t('ContactsTitle')}</h1>
                        <ul className={"flex flex-col cursor-pointer"}>
                            <li className={"inline mb-6 "}>
                                <MapPin className={"inline mr-2"}/>
                                <Link href={"# "} key={"local"}>{t('text')}</Link>
                            </li>
                            <li className={"inline mb-6"}>
                                <PhoneIncoming className={"inline  mr-2"}/>
                                <Link href={"#"} key={"number"}>4006657007
                                </Link>
                            </li>
                            <li className={"inline mb-6"}>
                                <Mail className={"inline  mr-2"}/>
                                <Link href={"#"} key={"email"}>freena@126.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"text-center copyright-text pb-5 "}>
                    <li className={""}>
                        <Link href="" className={""} key={"Copyright"}>Copyright © 2024.Company FREENA All rights
                            reserved.</Link>
                    </li>
                </div>
            </div>
        </footer>
    );
};

export default Footer;