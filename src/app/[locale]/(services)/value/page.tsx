import React from 'react';
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import {useTranslations} from 'next-intl';
const Page = () => {
    const t = useTranslations('ValuePage');
    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"value"}/>

            <div className={" max-container padding-container "}>
                <div
                    className={"bg-white mt-10 p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
                    <div className={"whitespace-normal"}>
                        <h1 className={"text-[32px] text-green-10"}>{t('radiantPanel.title')}</h1>
                        <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                            {t('radiantPanel.text')}
                        </p>
                        <p>
                            {t('radiantPanel.p1')}
                        </p>
                        <p>
                            {t('radiantPanel.p2')}
                        </p>
                        <p>
                            {t('radiantPanel.p3')}
                        </p>
                    </div>
                    <div className={"flex justify-center pt-10 pb-10"}>
                        <Image src={"/panel.png"} alt={"panel"} width={"800"} height={"600"}
                               className={"rounded-2xl"}></Image>
                    </div>

                </div>

                <div
                    className={"bg-white mt-10 p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
                    <div className={"whitespace-normal"}>
                        <h1 className={"text-[32px] text-green-10"}>{t('freshAirSystem.title')}</h1>
                        <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                            {t('freshAirSystem.text')}
                        </p>
                        <p>
                            {t('freshAirSystem.p1')}
                        </p>
                        <p>
                            {t('freshAirSystem.p2')}
                        </p>
                        <p>
                            {t('freshAirSystem.p3')}
                        </p>
                        <p>
                            {t('freshAirSystem.p4')}
                        </p>
                        <p>
                            {t('freshAirSystem.p5')}
                        </p>
                    </div>
                    <div className={"flex justify-center pt-10 pb-10"}>
                        <Image src={"/air.jpg"} alt={"panel"} width={"800"} height={"300"}
                               className={"rounded-2xl"}></Image>
                    </div>

                </div>

                <div
                    className={"bg-white mt-10 mb-10 p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
                    <div className={"whitespace-normal"}>
                        <h1 className={"text-[32px] text-green-10"}>
                            {t('centralControl.title')}
                        </h1>
                        <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                            {t('centralControl.text')}
                        </p>
                        <p>
                            {t('centralControl.p1')}
                        </p>
                        <p>
                            {t('centralControl.p2')}
                        </p>
                        <p>
                            {t('centralControl.p3')}
                        </p>
                    </div>
                    <div className={"flex justify-center pt-10 pb-10"}>
                        <Image src={"/system.jpg"} alt={"panel"} width={"800"} height={"600"}
                               className={"rounded-2xl"}></Image>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;