import React from 'react';
import {useLocale, useTranslations} from 'next-intl';
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";


interface BlogsProps {
    imageSrc: string,
    link: string,
    title: string,
    text: string
}

const CasePageSite = ({imageSrc, link, title, text}: BlogsProps) => {
    const localActive = useLocale()
    return (
        <article className={"mb-6"}>
            <Image className={"rounded-t-2xl"} src={imageSrc} alt={"work1"} width={380} height={240}/>
            <div className={"w-[380px] bg-gray-2 p-8 rounded-b-2xl"}>
                <Link href={`/${localActive}/${link}`} key={"case"}
                      className={"text-green-10 text-[22px] hover:underline"}>{title}</Link>
                <p className={"text-[15px] text-gray-6 mt-3"}>
                    {text}
                </p>
            </div>
        </article>
    )

}
const Page = () => {
    const t = useTranslations('CasesPage');
    const localActive = useLocale()
    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"cases"}/>

            <div className={" max-container padding-container "}>


                <section className={"max-container mt-16 flex justify-center "}>
                    <div>
                        <div className={"text-center"}>
                            <h1 className={"text-[32px] text-green-10"}>{t('title')}</h1>
                            <p className={"text-[15px] leading-10 mb-14 text-blue-75"}>{t('subtitle')}</p>
                        </div>
                        <div className={"grid grid-cols-3 gap-4"}>
                            <CasePageSite imageSrc={"/blue.png "}
                                          link={"case1"}
                                          title={t('BlueOcean.title')}
                                          text={t('BlueOcean.text')}/>
                            <CasePageSite imageSrc={"/research.png"}
                                          link={"case2"}
                                          title={t('ResearchInstitute.title')}
                                          text={t('ResearchInstitute.text')}/>
                            <CasePageSite imageSrc={"/Jinmao.png"}
                                          link={"case3"}
                                          title={t('BuildingOffice.title')}
                                          text={t('BuildingOffice.text')}/>

                        </div>


                    </div>
                </section>


            </div>
        </>
    );
};

export default Page;