import React from 'react';
import {useTranslations} from 'next-intl';
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
const Page = () => {
    const t = useTranslations('CasesPage');
    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"cases"}/>

            <div className={" max-container padding-container "}>

                <div
                    className={"bg-white mt-10 p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
                    <div className={"whitespace-normal"}>
                        <h1 className={"text-[32px] text-green-10"}>{t('BlueOcean.title')}</h1>
                        <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                            {t('BlueOcean.text')}
                        </p>
                    </div>
                    <div className={"flex justify-center pt-10 pb-10"}>
                        <Image src={"/blue.png"} alt={"panel"} width={"800"} height={"600"}
                               className={"rounded-2xl"}></Image>
                    </div>

                </div>


                <div
                    className={"bg-white mt-10 p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
                    <div className={"whitespace-normal"}>
                        <h1 className={"text-[32px] text-green-10"}>{t('ResearchInstitute.title')}</h1>
                        <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                            {t('ResearchInstitute.text')}
                        </p>
                        <p>
                            {t('ResearchInstitute.p')}
                        </p>
                    </div>
                    <div className={"flex justify-center pt-10 pb-10"}>
                        <Image src={"/research.png"} alt={"panel"} width={"800"} height={"600"}
                               className={"rounded-2xl"}></Image>
                    </div>

                </div>

                <div
                    className={"bg-white mt-10 mb-10  p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
                    <div className={"whitespace-normal"}>
                        <h1 className={"text-[32px] text-green-10"}>{t('BuildingOffice.title')}</h1>
                        <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                            {t('BuildingOffice.text')}
                        </p>

                    </div>
                    <div className={"flex justify-center pt-10 pb-10"}>
                        <Image src={"/Jinmao.png"} alt={"panel"} width={"800"} height={"600"}
                               className={"rounded-2xl"}></Image>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Page;