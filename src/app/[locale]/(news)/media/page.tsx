import React from 'react';
import {useTranslations} from 'next-intl';
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
const Page = () => {
    const t = useTranslations('MediaPage');
    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"media"}/>

            <div className={" max-container padding-container "}>

                <div
                    className={"bg-white mt-10 mb-10 p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
                    <div className={"whitespace-normal"}>
                        <h1 className={"text-[32px] text-green-10"}>{t('title')}</h1>
                        <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                            {t('text')}
                        </p>
                        <div className={"flex justify-center pt-10 pb-10"}>
                            <Image src={"/media1.jpeg"} alt={"panel"} width={"800"} height={"600"}
                                   className={"rounded-2xl"}></Image>
                        </div>
                        <p>
                            {t('p1')}
                        </p>
                        <p>
                            {t('p2')}
                        </p>
                        <p>
                            {t('p3')}
                        </p>
                        <div className={"flex justify-center pt-10 pb-10"}>
                            <Image src={"/media2.jpeg"} alt={"panel"} width={"800"} height={"600"}
                                   className={"rounded-2xl"}></Image>
                        </div>
                        <p>
                            {t('p4')}
                        </p>
                        <p>
                            {t('p5')}
                        </p>
                    </div>
                    <div className={"flex justify-center pt-10 pb-10"}>
                        <Image src={"/media3.jpg"} alt={"panel"} width={"800"} height={"600"}
                               className={"rounded-2xl"}></Image>
                    </div>

                </div>

            </div>

            </>
    );
};

export default Page;