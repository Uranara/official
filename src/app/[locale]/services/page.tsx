import React, {ReactNode} from 'react';
import Link from "next/link";
import PageHeader from "../../../components/PageHeader";
import {Lightbulb} from "lucide-react";
import Clients from '@/components/Clients';
import {useTranslations} from 'next-intl';

interface ServicePageProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
}

const ServicePageSite = ({icon,title,subtitle}:ServicePageProps) => {
    return (
        <div className={"flex flex-col p-10 bg-gray-1 rounded-2xl text-center"}>
            <div className={"flex justify-center p-4"}>
                {icon}
            </div>
            <h1 className={"text-[24px] text-gray-5 mb-3"}>{title}</h1>
            <p className={"text-[15px] text-gray-5"}>
                {subtitle}
            </p>
        </div>
    )
}

const Page = () => {
    const t = useTranslations('ServicePage');

    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"services"}/>
            <Clients></Clients>
            <div className={"my-10 mx-14"}>
                <div className={"grid grid-cols-3 gap-4"}>

                    <ServicePageSite icon={ <Lightbulb  color="#46a96a" size={40}/>}
                                     title={"Apps Design"}
                                     subtitle={" Application design is the process of creating a digital solution that meets the needs of\n" +
                                         "                            users. It\n" +
                                         "                            involves understanding user needs, designing user interfaces, and developing code."}/>

                    <ServicePageSite icon={ <Lightbulb  color="#46a96a" size={40}/>}
                                     title={"Apps Design"}
                                     subtitle={" Application design is the process of creating a digital solution that meets the needs of\n" +
                                         "                            users. It\n" +
                                         "                            involves understanding user needs, designing user interfaces, and developing code."}/>

                    <ServicePageSite icon={ <Lightbulb  color="#46a96a" size={40}/>}
                                     title={"Apps Design"}
                                     subtitle={" Application design is the process of creating a digital solution that meets the needs of\n" +
                                         "                            users. It\n" +
                                         "                            involves understanding user needs, designing user interfaces, and developing code."}/>
                    <ServicePageSite icon={ <Lightbulb  color="#46a96a" size={40}/>}
                                     title={"Apps Design"}
                                     subtitle={" Application design is the process of creating a digital solution that meets the needs of\n" +
                                         "                            users. It\n" +
                                         "                            involves understanding user needs, designing user interfaces, and developing code."}/>

                    <ServicePageSite icon={ <Lightbulb  color="#46a96a" size={40}/>}
                                     title={"Apps Design"}
                                     subtitle={" Application design is the process of creating a digital solution that meets the needs of\n" +
                                         "                            users. It\n" +
                                         "                            involves understanding user needs, designing user interfaces, and developing code."}/>

                    <ServicePageSite icon={ <Lightbulb  color="#46a96a" size={40}/>}
                                     title={"Apps Design"}
                                     subtitle={" Application design is the process of creating a digital solution that meets the needs of\n" +
                                         "                            users. It\n" +
                                         "                            involves understanding user needs, designing user interfaces, and developing code."}/>
                </div>
            </div>
        </>
    );
};

export default Page;