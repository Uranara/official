import React from 'react';
import Link from "next/link";
import {FOOTER_LINKS} from "@/constants";
import {Mail, MapPin, PhoneIncoming} from "lucide-react";
import {useLocale, useTranslations} from 'next-intl';

const Footer = () => {
    const localActive = useLocale()
    const t = useTranslations('Footer');

    return (
        <footer className={"relative bg-footer-bg bg-cover bg-center h-full pt-[90px]"}>
            <div className={" max-container padding-container relative z-20 text-white"}>
                <div className={"grid grid-cols-3 gap-4 "}>

                    <div>
                        <h1 className={"text-[24px] mb-6 font-bold"}>{t(`Services.title`)}</h1>
                        <ul className={"flex flex-col"}>
                            <li className={"mb-3"}>
                                <Link href={`/${localActive}/services`} className={"hover:underline"}
                                >{t(`Services.links1`)}</Link>
                            </li>
                            <li className={"mb-3"}>
                                <Link href={`/${localActive}/services`} className={"hover:underline"}
                                >{t(`Services.links2`)}</Link>
                            </li>
                            <li className={"mb-3"}>
                                <Link href={`/${localActive}/services`} className={"hover:underline"}
                                >{t(`Services.links3`)}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className={"text-[24px] mb-6 font-bold"}>{t(`Information.title`)}</h1>
                        <ul className={"flex flex-col"}>
                            <li className={"mb-3"}>
                                <Link href={`/${localActive}/case`} className={"hover:underline"}
                                >{t(`Information.links1`)}</Link>
                            </li>
                            <li className={"mb-3"}>
                                <Link href={"http://www.freena.com.cn/cn/hr.html"} className={"hover:underline"}
                                >{t(`Information.links2`)}</Link>
                            </li>
                            <li className={"mb-3"}>
                                <Link href={`/${localActive}/contact`} className={"hover:underline"}
                                >{t(`Information.links3`)}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className={"text-[24px] mb-6 font-bold"}>{t('ContactsTitle')}</h1>
                        <ul className={"flex flex-col cursor-pointer"}>
                            <li className={"inline mb-6 "}>
                                <MapPin className={"inline mr-2"}/>
                                <Link href={"#"} key={"local"}>{t('text')}</Link>
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