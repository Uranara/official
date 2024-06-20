import React from 'react';
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import {useTranslations} from 'next-intl';
const Page = () => {
    const t = useTranslations('SystemPage');
    return (
        <>
            <PageHeader
                title={t('title')}
                subtitle={t('subtitle')}
                href={"system"}/>

            <div className={" flex justify-center mt-8  mb-14 "}>
                <Image src={"/scene.jpg"} alt={"content"} width={"1000"} height={"1800"}
                       className={"rounded-2xl"}></Image>
            </div>
        </>
    );
};

export default Page;