import React from 'react';
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Idea from "@/components/Idea";
import Image from "next/image";
import {useTranslations} from 'next-intl';
const Page = () => {
    const t = useTranslations('ContentPage');
    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"content"}/>

            <div className={" flex justify-center mt-8  mb-14 "}>
                <Image src={"/content.jpg"} alt={"content"} width={"1000"} height={"1800"}
                       className={"rounded-2xl"}></Image>
            </div>
        </>
    );
};

export default Page;