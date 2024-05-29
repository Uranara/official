import React from 'react';
import Link from "next/link";
import { FOOTER_LINKS} from "@/constants";
import {Mail, MapPin, PhoneIncoming} from "lucide-react";


const Footer = () => {
    return (
        <footer className={"relative bg-footer-bg bg-cover bg-center h-full pt-[90px]"}>
                <div className={" max-container padding-container relative z-20 text-white"}>
                    <div className={"grid grid-cols-4 gap-4 "}>
                        <div>
                            <h1 className={"text-6xl font-bold  mb-6"}>FREENA</h1>
                            <p className={"text-[14px] mb-4"}>At DesignSoft we are passionate about providing businesses with the IT solutions they
                                need to succeed in today's competitive marketplace.</p>
                            <h3  className={"mb-6 text-[20px]"}>Follow us</h3>
                            <div className={"flex flex-row"}>

                            </div>
                        </div>
                        {
                            FOOTER_LINKS.map((columns) => (
                                <div>
                                    <h1 className={"text-[24px] mb-6 font-bold"}>{columns.title}</h1>
                                    <ul className={"flex flex-col"}>
                                        {
                                            columns.links.map((link) => (
                                                <Link href={"#"} className={"mb-3  hover:underline"} key={link}>{link}</Link>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                        <div>
                            <h1 className={"text-[24px] mb-6 font-bold"}>Contacts</h1>
                            <ul className={"flex flex-col cursor-pointer"}>
                                <li className={"inline mb-6 whitespace-nowrap"}>
                                    <MapPin className={"inline mr-2"} />
                                    <Link href={"# "} key={"local"}>101 West Town , PBO 12345, United States</Link>
                                </li>
                                <li className={"inline mb-6"}>
                                    <PhoneIncoming  className={"inline  mr-2"}/>
                                    <Link href={"#"}  key={"number"}>+1 1234 56 789</Link>
                                </li>
                                <li className={"inline mb-6"}>
                                    <Mail className={"inline  mr-2"} />
                                    <Link href={"#"} key={"email"} >contact@example.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"text-center copyright-text pb-5 "}>
                            <li className={""}>
                                <Link href="" className={""} key={"Copyright"}>Copyright © 2024.Company FREENA All rights reserved.</Link>
                            </li>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;